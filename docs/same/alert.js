function create_eom_tones() {
  var eom = genArray(EOM);
  generate_silence(SAMPLE_RATE);
  for (var i = 0; i < 3; i++) {
    generate_afsk(eom);
    generate_silence(SAMPLE_RATE);
  }
}
function create_header_tones(header) {
  var he = genArray(header);
  //generate_silence(SAMPLE_RATE);
  for (var i = 0; i < 3; i++) {
    if (em) { extramarks(); }
    generate_afsk(he);
    if (em) { extramarks(); }
    if (es){extraspace();}
    generate_silence(SAMPLE_RATE);
  }
}
function create_header_string(origin, event, locations, length, date, par) {
  var h = "";
  h += HEADER;
  h += "-";
  h += origin;
  h += "-";
  h += event;
  for (var i = 0; i < locations.length; i++) {
    h += "-";
    h += zero_pad_int(locations[i], 6);
  }
  h += "+";
  h += length;
  h += "-";
  h += getDay(date);
  h += getHour(date);
  h += getMinute(date);
  h += "-";
  h += par;
  h += "-";
  return h;
}
function create_wat() {
  generate_dual_tone(WAT_FREQ_1, WAT_FREQ_2, SAMPLE_RATE * tlen);
}
function create_nwr_tone() {
  generate_tone(1050,SAMPLE_RATE*tlen);
}
function create_alert(origin, event, locations, length, date, par) {
  var h = create_header_string(origin, event, locations, length, date, par);
  create_header_tones(h);
  if(tone){create_nwr_tone();}else{create_wat();}
  generate_silence(SAMPLE_RATE);
  create_eom_tones();
}
function create_raw_alert(h) {
  create_header_tones(h);
  if(tone){create_nwr_tone();}else{create_wat();}
  generate_silence(SAMPLE_RATE);
  create_eom_tones();
}
