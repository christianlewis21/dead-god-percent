const AchievementMap = JSON.parse(localStorage.getItem("positionBooleanMap"));
const stylesheet = document.getElementById("stylesheet");
const challengegraphics = document.getElementById('challengegraphics');

const challengeName = document.getElementById('challengename');
const challengeReward = document.getElementById('challengereward');
const challengeDescription = document.getElementById('challengedescription');
const menuBackground = document.getElementById('menubackground');

let challengeProgress = 45;

let achievementsData = {};

fetch('achievements.json')
    .then(response => response.json())
    .then(newData => {
        achievementsData = newData;
        generateChallengeProgress(challengeMap);
        getChallenge()
        generateChallengeBar()
    })

function generateChallengeProgress(challengeMap) {
    challengegraphics.innerHTML = '';
    for (const [position, challengeId] of Object.entries(challengeMap)) {
        if (AchievementMap[position] === false) {
            challengeProgress--;
            if (achievementsData[position]) {
                let challengeAchievementDescription = achievementsData[position].split(': ').pop();
                challengegraphics.innerHTML += `
                    <div class='challenge ${challengeId}' id=${challengeId}>
                        <h1>${challengeAchievementDescription.split('Complete ').pop()}</h1>
                    </div>`;
            }
        }
    }
}

function getChallengeProgress() {
    return challengeProgress;
}

function getChallenge() {
    const overlay = document.getElementById('overlay');
    document.querySelectorAll('.challenge').forEach(challenge => {
        challenge.addEventListener('mouseenter', function() {
            challengeDescription.innerHTML = '';
            challengeDescription.style.zIndex = 10001;
            for (const [position, challengeId] of Object.entries(challengeMap)) {
                if (challengeId === challenge.id) {
                    let challengeName = achievementsData[position].split('Complete')[1]?.split('(')[0]?.trim();
                    // let challengeDescription = 
                    challengeDescription.innerHTML += `
                        <a class="button-text challenge-1" href=https://bindingofisaacrebirth.wiki.gg/wiki/${challengeName.replace(/ /g, "_")} target=_blank>${challengeName}</a>
                        <img src="pictures/refs/challenges/${challengeId}.jpg">
                    `;
                }
            }
        })
        challenge.addEventListener('click', function() {
            overlay.classList.add('show');
        })
        overlay.addEventListener('click', function() {
            overlay.classList.remove('show');
        });
        challenge.addEventListener('mouseleave', function() {
            if (!overlay.classList.contains('show')) {
                challengeDescription.classList.remove('show');
            }
        });
    });
}

const styles = `
  ${Array.from({ length: 45 }, (_, i) => i + 1).map(i => `
    .challenge-${i}:hover { color: #920f0f }
  `).join('')}
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);