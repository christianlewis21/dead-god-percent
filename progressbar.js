function generateCharacterButtonBar() {
    var max = 493;
    var width = 0;
    var min = getCharacterProgress();
    var i = 0;
    var change = 100/max;
    var characterButtonBar = document.getElementById('characterbuttonbar');
    var width = 1;
    setInterval(frame, 2);
    function frame() {
        if (i <= min) {
            i++;
            width += change
            characterButtonBar.style.width = width + "%";
        }
    }
};

function generateChallengeButtonBar() {
    var max = 45;
    var width = 0;
    var min = getChallengeProgress();
    var i = 0;
    var change = 100/max;
    var challengeButtonBar = document.getElementById('challengebuttonbar');
    var width = 1;
    setInterval(frame, 20);
    function frame() {
        if (i <= min) {
            i++;
            width += change
            challengeButtonBar.style.width = width + "%";
        }
    }
};