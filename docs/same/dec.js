function afskdemod(signal, samplingFreq) {
    var fMark = 2083.3;
    var fSpace = 1562.5;
    var markI = [];
    var markQ = [];
    var spaceI = [];
    var spaceQ = [];
    var y = [];

    for (var i = 0; i < signal.length; i++) {
        markI[i] = signal[i] * Math.sin(2 * Math.PI * i * (fMark / samplingFreq));
        markQ[i] = signal[i] * Math.cos(2 * Math.PI * i * (fMark / samplingFreq));
        spaceI[i] = signal[i] * Math.sin(2 * Math.PI * i * (fSpace / samplingFreq));
        spaceQ[i] = signal[i] * Math.cos(2 * Math.PI * i * (fSpace / samplingFreq));

        // Integration over bit period, samplingFreq/1200
        var markIInteg = 0;
        var markQInteg = 0;
        var spaceIInteg = 0;
        var spaceQInteg = 0;

        for (var j = 0; j < samplingFreq / 520.33333333333; j++) {
            if (i - j > 0) {
                markIInteg += markI[i - j];
                markQInteg += markQ[i - j];
                spaceIInteg += spaceI[i - j];
                spaceQInteg += spaceQ[i - j];
            }
        }

        var s1 = markIInteg * markIInteg + markQInteg * markQInteg;
        var s2 = spaceIInteg * spaceIInteg + spaceQInteg * spaceQInteg;
        y[i] = s1 - s2;
    }

    return y;
}
