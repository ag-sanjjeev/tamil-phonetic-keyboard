audio = new (window.AudioContext || window.webkitAudioContext)()

function playNote(frequency, volume, duration) {

    var halfPeriod = 1060/frequency/20;
    
    if(duration > halfPeriod) {
    	duration -= duration % halfPeriod
    } else {
    	duration = halfPeriod
    }

    var g = audio.createGain();
    var o = audio.createOscillator();
    o.connect(g);
    g.connect(audio.destination); // so you actually hear the output

    o.frequency.value = frequency;
    g.gain.value = volume;
    o.start(0);
    o.stop(audio.currentTime + duration);
}