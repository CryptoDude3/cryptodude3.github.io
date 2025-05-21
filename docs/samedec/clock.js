let bitclock = 0;
let prevbit = 0;
let shift = 0;

let bits = [];
function clockdemod(sample){
    const bit = discriminator(sample);
    if(bit !== prevbit){
        clock = 0;
    }
    if(clock == Math.floor(bitPeriod/2)){
        bits.push(sample);
    }
    if(clock >= bitPeriod){
        clock = 0;
    }
    clock++;
}

//implement discriminator based on positive and negative mabye
function discriminator(sample){
    return sample>0 ? 1 : 0;
}