// worker.js - Runs in the background
var i = 0;

function timedCount() {
    i = i + 1;
    postMessage(i);
    setTimeout(timedCount, 1000);
}

timedCount();
// worker.js - Runs in the background
var i = 0;

function timedCount() {
    i = i + 1;
    postMessage(i);
    setTimeout(timedCount, 1000);
}

timedCount();
