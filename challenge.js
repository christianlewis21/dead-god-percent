const AchievementMap = JSON.parse(localStorage.getItem("positionBooleanMap"));
const challengegraphics = document.getElementById('challengegraphics');

let achievementsData = {};

fetch('achievements.json')
    .then(response => response.json())
    .then(newData => {
        achievementsData = newData;
        generateChallengeProgress(challengeMap);
    })

function generateChallengeProgress(challengeMap) {
    challengegraphics.innerHTML = '';
    for (const [position, challengeId] of Object.entries(challengeMap)) {
        if (AchievementMap[position] === false) {
            if (achievementsData[position]) {
                let challengeAchievementDescription = achievementsData[position].split(': ').pop();
                challengegraphics.innerHTML += `
                    <div class="challenges">
                        <h1>${challengeAchievementDescription}</h1>
                    </div>`;
            }
        }
    }
}

function getChallengeProgress() {
    return challengeProgress;
}