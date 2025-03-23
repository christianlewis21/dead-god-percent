const stylesheet = document.getElementById("stylesheet");
const AchievementMap = JSON.parse(localStorage.getItem("positionBooleanMap"));

let characterProgress = 441;
let challengeProgress = 45;

const simpleButton = document.getElementById("viewtoggle");

const infoDiv = document.querySelector('.info');
const infobar = document.getElementById('infobar')
const infoBarDescription = document.getElementById('infobardescription')

const characterButton = document.getElementById('characterbutton')
const advancedgraphics = document.getElementById("advancedgraphics");
const characterDescriptions = document.getElementById('characterdescriptions')
const markDescriptions = document.getElementById('markdescriptions')

const taintedButton = document.getElementById("taintedtoggle");
const taintedgraphics = document.getElementById("taintedgraphics");
const taintedCharacterDescriptions = document.getElementById('taintedcharacterdescriptions')
const taintedMarkDescriptions = document.getElementById('taintedmarkdescriptions')

let checked = false;

let achievementsData = {};

fetch('achievements.json')
    .then(response => response.json())
    .then(newData => {
        achievementsData = newData;
    })

document.addEventListener("DOMContentLoaded", function() {
    generateSheets(characterMap, markMap);
    checkCharacterUnlocks(characterAchievementMap, markAchievementMap, true, deliriumMap, taintedDeliriumMap, fullMap)
    generateDescriptions(characterDescriptions, markDescriptions)
    taintedgraphics.remove();
    setTimeout(generateCharacterButtonBar, 500);
    setTimeout(generateChallengeButtonBar, 500);
    setTimeout(generateCharacterBar, 500);
});

taintedButton.addEventListener('click', function() {
    checked = !checked;
    if (checked) {
        advancedgraphics.remove();
        document.body.appendChild(taintedgraphics);
        checkCharacterUnlocks(characterAchievementMap, markAchievementMap, false, deliriumMap, taintedDeliriumMap, fullMap);
    } else {
        taintedgraphics.remove();
        document.body.appendChild(advancedgraphics);
    }
});

infobar.addEventListener('click', function() {
    generateInfoBox();
    infoBarDescription.classList.add('show');
});

infoBarDescription.addEventListener('click', function() {
    infoBarDescription.classList.remove('show');
});

function generateSheets(characterMap, markMap) {
    advancedgraphics.innerHTML = characterMap.slice(0, 17).map(character => `
        <div class="completion">
            <img class='sheet' id ='paper-character-${character.id}' src="pictures/refs/marks/deliriumpaper.png">
            <img class='character' id="character-${character.id}" src="pictures/refs/characters/${character.name}.png">
            ${markMap.map(mark => `
                <img class='mark mark-${character.id}-${mark.id}' id='mark-${character.id}-${mark.id}' src="pictures/refs/marks/${mark.name}.png">
            `).join('')}
        </div>`).join('')
        

    taintedgraphics.innerHTML = characterMap.slice(17).map(character => `
        <div class="completion">
            <img class='sheet' id ='paper-character-${character.id}' src="pictures/refs/marks/Tdeliriumpaper.png">
            <img class='character' id="character-${character.id}" src="pictures/refs/characters/${character.name}.png">
            ${markMap.slice(0,11).map(mark => `
                <img class='mark mark-${character.id}-${mark.id}' id='mark-${character.id}-${mark.id}' src="pictures/refs/marks/${mark.name}.png">
            `).join('')}
        </div>`).join('');
};

function checkCharacterUnlocks(characterAchievementMap, markAchievementMap, value, deliriumMap, taintedDeliriumMap, fullMap) {
    if (value) {
        for (const [position, characterId] of Object.entries(characterAchievementMap)) {
            if (AchievementMap[position] === false) {
                document.getElementById(characterId).classList.add('grayscale');
                characterProgress--;
            }
        }
    
        for (let i = 1; i <= 34; i++) {
            for (const [position, markId] of Object.entries(markAchievementMap[i])) {
                if (AchievementMap[position] === false) {
                    document.getElementById(markId).classList.add('grayscale');
                    characterProgress--;
                }
            }        
        }
        for (let i = 18; i <= 34; i++) {     
            for (let j = 4; j > 1; j--) {
                if (document.getElementById(`mark-${i}-5`).classList.contains('grayscale')) {
                    document.getElementById(`mark-${i}-${j}`).classList.add('grayscale');
                    characterProgress--;
                }
            }
    
            if (document.getElementById(`mark-${i}-8`).classList.contains('grayscale')) {
                document.getElementById(`mark-${i}-7`).classList.add('grayscale');
                characterProgress--;
            }
        }
        for (const [position, paperId] of Object.entries(deliriumMap)) {
            if (!AchievementMap[position]) {
                document.getElementById(`paper-${paperId}`).classList.add('grayscale');
                characterProgress--;
            } 
        }
        let count = 0
        for (const [position, characterId] of Object.entries(fullMap)) {
            if (AchievementMap[position]) {
                document.getElementById(characterId).classList.add('golden');
                count++;
            }
            else {
                characterProgress--;
            }
        }

        for (const [position, challengeId] of Object.entries(challengeMap)) {
            if (AchievementMap[position] === false) {
                challengeProgress--;
            }
        }
    }
    else {
        for (const [position, paperId] of Object.entries(taintedDeliriumMap)) {
            if (!AchievementMap[position]) {
                document.getElementById(`paper-${paperId}`).classList.add('grayscale');
                characterProgress--;
            } 
        }
    }
};

function generateDescriptions(characterDescriptions, markDescriptions) {
    const overlay = document.getElementById('overlay');

    document.querySelectorAll('.character').forEach(character => {
        character.addEventListener('mouseenter', function(event) {
            characterDescriptions.innerHTML = '';
            const maps = [
                { map: characterAchievementMap, suffix: '', color: '#c43c3c' },
                { map: deliriumMap, suffix: '-delirium', color: '#920f0f' },
                { map: taintedDeliriumMap, suffix: '-delirium', color: '#920f0f' },
                { map: fullMap, suffix: '-full', color: '#f7d401' }
            ];

            maps.forEach(({ map, suffix, color }) => {
                for (const [position, characterId] of Object.entries(map)) {
                    if (characterId === character.id) {
                        const achievementDescription = achievementsData[position].split(': ')[1];
                        const achievementName = achievementsData[position].split(': ')[0];
                        characterDescriptions.innerHTML += `
                        <div class='achievement-container'>
                            <div class="hoverbox-img">
                                <img src="pictures/refs/achievements/${characterId}${suffix}.jpg"></img>
                            </div>
                            <div class="hoverbox-dsc">
                                <ul>
                                    <li><a target='_blank' style='color: ${color}' href="https://bindingofisaacrebirth.wiki.gg/wiki/${achievementName}">${achievementName}</a><li>
                                    <li><div>${achievementDescription}</div><li>
                                <ul>
                            </div>
                        </div>
                        `;
                    }
                }
            })

            const rect = event.target.getBoundingClientRect();
            const hoverboxWidth = characterDescriptions.offsetWidth;
            const viewportWidth = window.innerWidth;

            let leftPosition = rect.left + 100;
            let topPosition = rect.bottom - 100;
            if (leftPosition + hoverboxWidth > viewportWidth) {
                leftPosition = rect.left - hoverboxWidth - 10;
            }

            if (leftPosition < 0) {
                leftPosition = 10;
            }

            if (topPosition > 780) {
                topPosition = 700;
            }

            characterDescriptions.style.top = `${topPosition}px`;
            characterDescriptions.style.left = `${leftPosition}px`;
            characterDescriptions.classList.add('show');
        });

        character.addEventListener('click', function() {
            overlay.classList.add('show');
            characterDescriptions.style.zIndex = '10000';
        });

        overlay.addEventListener('click', function() {
            overlay.classList.remove('show');
            characterDescriptions.classList.remove('show');
        });

        character.addEventListener('mouseleave', function() {
            if (!overlay.classList.contains('show')) {
                characterDescriptions.classList.remove('show');
            }
        });
    });

    document.querySelectorAll('.mark').forEach(mark => {
        mark.addEventListener('mouseenter', function(event) {
            markDescriptions.innerHTML = '';
            for (let i = 1; i <= 34; i++) {
                for (let [position, markId] of Object.entries(markAchievementMap[i])) {

                    if (markId === mark.id) {
                        if (position.match(/^\d{3}-\d$/)) {
                            position = position.split('-')[0];
                        }
                        const markAchievementDescription = achievementsData[position].split(': ')[1];
                        const markAchievementName = achievementsData[position].split(': ')[0];

                        markDescriptions.innerHTML = `
                            <div class="hoverbox-img">
                                <img src="pictures/refs/achievements/${markId}.jpg"></img>
                            </div>
                            <div class="hoverbox-dsc">
                                <ul>
                                    <li><div><a target='_blank' style="color: #c43c3c" href="https://bindingofisaacrebirth.wiki.gg/wiki/${markAchievementName}">${markAchievementName}<a></div><li>
                                    <li><div>${markAchievementDescription}</div><li>
                                <ul>
                            </div>
                            `;
                            markDescriptions.style.display = 'block';
                            markDescriptions.classList.add('show');
                    }
                }
            }

            const rect = event.target.getBoundingClientRect();
            const hoverboxWidth = markDescriptions.offsetWidth;
            const viewportWidth = window.innerWidth;

            let leftPosition = rect.left + 40;
            let topPosition = rect.bottom - 40;
            if (leftPosition + hoverboxWidth > viewportWidth) {
                leftPosition = rect.left - hoverboxWidth - 10;
            }

            if (leftPosition < 0) {
                leftPosition = 10;
            }

            if (topPosition > 800) {
                topPosition = 790;
            }

            markDescriptions.style.top = `${topPosition}px`;
            markDescriptions.style.left = `${leftPosition}px`;
        });

        mark.addEventListener('click', function() {
            overlay.classList.add('show');
            markDescriptions.style.zIndex = '10000';
        });

        overlay.addEventListener('click', function() {
            overlay.classList.remove('show');
            markDescriptions.classList.remove('show');
        });

        mark.addEventListener('mouseleave', function() {
            if (!overlay.classList.contains('show')) {
                markDescriptions.classList.remove('show');
            }
        });
    });
}

function getCharacterProgress() {
    return characterProgress;
};

function getChallengeProgress() {
    return challengeProgress;
};

function generateInfoBox() {
    infoBarDescription.innerHTML = '';
    const maps = [
        { map: characterAchievementMap, color: '#c43c3c' },
        { map: deliriumMap, color: '#920f0f' },
        { map: taintedDeliriumMap, color: '#920f0f' },
        { map: fullMap, color: '#f7d401' },
    ];
    
    maps.forEach(({ map, color }) => {
        for (const [position] of Object.entries(map)) {
            const achievementDescription = achievementsData[position].split(': ')[1];
            const achievementName = achievementsData[position].split(': ')[0];
            if (AchievementMap[position] == false) {
                infoBarDescription.innerHTML += `
                <a target='_blank' style='color: ${color}' href="https://bindingofisaacrebirth.wiki.gg/wiki/${achievementName}">${achievementName}</a>
                <div>${achievementDescription}</div>
                `;
            }
        }
    })

    for (let i = 1; i <= 34; i++) {
        for (let [position] of Object.entries(markAchievementMap[i])) {
            color = ' #c43c3c'
            if (position.match(/^\d{3}-\d$/)) {
                position = position.split('-')[0];
            }
            const markAchievementDescription = achievementsData[position].split(': ')[1];
            const markAchievementName = achievementsData[position].split(': ')[0];
            if (AchievementMap[position] == false) {
                infoBarDescription.innerHTML += `
                    <a target='_blank' style="color: ${color}" href="https://bindingofisaacrebirth.wiki.gg/wiki/${markAchievementName}">${markAchievementName}<a>
                    <div>${markAchievementDescription}</div>
                    `;
            }
        }
    }
}

const styles = `
  ${Array.from({ length: 34 }, (_, i) => i + 1).map(i => `
    .mark-${i}-1 { top: 5%; left: 25%; } /* heart */
    .mark-${i}-2 { top: 15%; left: 40%; } /* cath */
    .mark-${i}-3 { top: 25%; left: 30%; } /* sheol */
    .mark-${i}-4 { top: 20%; left: 55%; } /* pol */
    .mark-${i}-5 { top: 35%; left: 45%; } /* neg */
    .mark-${i}-6 { top: 36%; left: 68%; } /* megasatan */
    .mark-${i}-7 { top: 35%; left: 20%; } /* bossrush */
    .mark-${i}-8 { top: 52%; left: 46%; } /* hush */
    .mark-${i}-9 { top: 70%; left: 48%; } /* mother */
    .mark-${i}-10 { top: 57%; left: 67%; } /* beast */
    .mark-${i}-11 { top: 16%; left: 78%; } /* greedier */
    .mark-${i}-12 { top: 21%; left: 71%; } /* greed */
  `).join('')}
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);