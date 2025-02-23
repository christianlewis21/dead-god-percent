document.getElementById('characterbar').addEventListener('click', function() {
})

function generateCharacterButtonBar() {
    var max = 441;
    var width = 0;
    var min = getCharacterProgress();
    var i = 0;
    var change = 100/max;
    var bar = document.getElementById('characterbuttonbar');
    var width = 0;
    setInterval(frame, 2);
    function frame() {
        if (i < min) {
            i++;
            width += change
            bar.style.width = width + "%";
        }
    }
};

function generateCharacterBar() {
    var max = 441;
    var width = 0;
    var min = getCharacterProgress();
    var i = 0;
    var change = 100/max;
    var bar = document.getElementById('characterbar');
    var width = 0;
    setInterval(frame, 2);
    function frame() {
        if (i < min) {
            i++;
            width += change
            bar.style.width = width + "%";
            bar.innerHTML = i + "/441"
        }
    }
};

function generateChallengeButtonBar() {
    var max = 45;
    var width = 0;
    var min = getChallengeProgress();
    var i = 0;
    var change = 100/max;
    var bar = document.getElementById('challengebuttonbar');
    var width = 0;
    setInterval(frame, 20);
    function frame() {
        if (i < min) {
            i++;
            width += change
            bar.style.width = width + "%";
        }
    }
};