const AchievementMap = JSON.parse(localStorage.getItem("positionBooleanMap"));
const miscgraphics = document.getElementById('miscgraphics');

let achievementsData = {};

fetch('achievements.json')
    .then(response => response.json())
    .then(newData => {
        achievementsData = newData;
        generateMiscProgress(miscMap);
    })

    function generateMiscProgress(miscMap) {
        for (const [position, miscId] of Object.entries(miscMap)) {
            if (AchievementMap[position] === false) {
                let miscAchievementDescription = achievementsData[position].split(': ').pop();
                miscgraphics.innerHTML += `
                    <div class="enemies">
                        <h1>${miscAchievementDescription}</h1>
                    </div>`;
            }
        }
    };