const AchievementMap = JSON.parse(localStorage.getItem("positionBooleanMap"));
const enemygraphics = document.getElementById('enemygraphics');

let achievementsData = {};

fetch('achievements.json')
    .then(response => response.json())
    .then(newData => {
        achievementsData = newData;
        generateEnemyProgress(enemyMap);
    })

    function generateEnemyProgress(enemyMap) {
        for (const [position, enemyId] of Object.entries(enemyMap)) {
            if (AchievementMap[position] === false) {
                let enemyAchievementDescription = achievementsData[position].split(': ').pop();
                enemygraphics.innerHTML += `
                    <div class="enemies">
                        <h1>${enemyAchievementDescription}</h1>
                    </div>`;
            }
        }
    };