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
            if (width >= 100) {
                bar.style.backgroundColor = "#f7d401";
            }
        }
    }
};

function generateChallengeBar() {
    var max = 45;
    var width = 0;
    var min = getChallengeProgress();
    var i = 0;
    var change = 100/max;
    var bar = document.getElementById('challengebar');
    var width = 0;
    setInterval(frame, 20);
    function frame() {
        if (i < min) {
            i++;
            width += change
            bar.style.width = width + "%";
            if (width >= 100) {
                bar.style.backgroundColor = "#f7d401";
            }
        }
    }
};