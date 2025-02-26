const stylesheet = document.getElementById("stylesheet");
const AchievementMap = JSON.parse(localStorage.getItem("positionBooleanMap"));

let characterProgress = 441;
let challengeProgress = 45;

const simpleButton = document.getElementById("viewtoggle");

const characterButton = document.getElementById('characterbutton')
const advancedgraphics = document.getElementById("advancedgraphics");
const characterDescriptions = document.getElementById('characterdescriptions')
const markDescriptions = document.getElementById('markdescriptions')

const taintedButton = document.getElementById("taintedtoggle");
const taintedgraphics = document.getElementById("taintedgraphics");
const taintedCharacterDescriptions = document.getElementById('taintedcharacterdescriptions')
const taintedMarkDescriptions = document.getElementById('taintedmarkdescriptions')

const challengeButton = document.getElementById('challengebutton')
const challengegraphics = document.getElementById('challengegraphics')

const enemyButton = document.getElementById('enemybutton')
const enemygraphics = document.getElementById('enemygraphics')

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
    challengegraphics.remove();
    enemygraphics.remove();
    setTimeout(generateCharacterButtonBar, 500);
    setTimeout(generateChallengeButtonBar, 500);
    setTimeout(generateCharacterBar, 500);
});

simpleButton.addEventListener("click", function() {
    advancedgraphics.remove()
    taintedgraphics.remove()
    enemygraphics.remove()
    taintedButton.remove()
    const data = localStorage.getItem("processedData");
    if (data) {
        document.getElementById("fileContent").textContent = data;
    }
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

characterButton.addEventListener('click', function() {
    fileContent.textContent = '';
    challengegraphics.remove()
    enemygraphics.remove()
    document.body.appendChild(taintedButton);
    if (checked) {
        document.body.appendChild(taintedgraphics);
    }
    else {
        document.body.appendChild(advancedgraphics);
    }
});

challengeButton.addEventListener('click', function() {
    fileContent.textContent = '';
    advancedgraphics.remove()
    taintedgraphics.remove()
    enemygraphics.remove()
    taintedButton.remove()
    document.body.appendChild(challengegraphics);
    generateChallengeProgress(challengeMap)
});

enemyButton.addEventListener('click', function() {
    stylesheet.setAttribute("href", "analyzerstyles.css");
    fileContent.textContent = '';
    advancedgraphics.remove()
    taintedgraphics.remove()
    taintedButton.remove()
    document.body.appendChild(enemygraphics);
    generateEnemyProgress(enemyMap)
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
                document.getElementById(paperId).classList.add('grayscale');
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
                document.getElementById(paperId).classList.add('grayscale');
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
            for (const [position, characterId] of Object.entries(characterAchievementMap)) {
                if (characterId === character.id) {
                    const characterAchievementDescription = achievementsData[position].split(': ')[1];
                    const characterAchievementName = achievementsData[position].split(': ')[0];
                    characterDescriptions.innerHTML = `
                    <div class='achievement-container'>
                        <div class="hoverbox-img">
                            <img src="/pictures/refs/achievements/${characterId}.jpg"></img>
                        </div>
                        <div class="hoverbox-dsc">
                            <ul>
                                <li><div class="red"><a href="https://bindingofisaacrebirth.wiki.gg/wiki/${characterAchievementName}">${characterAchievementName}</a></div><li>
                                <li><div>${characterAchievementDescription}</div><li>
                            <ul>
                        </div>
                    </div>
                    `;
                }
            };
            for (let [position, characterId] of Object.entries(deliriumMap)) {
                characterId = characterId.split('-')[1] + '-' + characterId.split('-')[2]
                if (characterId === character.id) {
                    const deliriumAchievementDescription = achievementsData[position].split(': ')[1];
                    const deliriumAchievementName = achievementsData[position].split(': ')[0];
                    characterDescriptions.innerHTML += `
                    <div class='achievement-container'>
                        <div class="hoverbox-img">
                            <img src="/pictures/refs/achievements/${characterId}-delirium.jpg"></img>
                        </div>
                        <div class="hoverbox-dsc">
                            <ul>
                                <li><div style='color: #920f0f'>${deliriumAchievementName}</div><li>
                                <li><div>${deliriumAchievementDescription}</div><li>
                            <ul>
                        </div>
                    </div>
                    `;
                }
            };
            for (const [position, characterId] of Object.entries(fullMap)) {
                if (characterId === character.id) {
                    const fullAchievementDescription = achievementsData[position].split(': ')[1];
                    const fullAchievementName = achievementsData[position].split(': ')[0];
                    characterDescriptions.innerHTML += `
                    <div class='achievement-container'>
                        <div class="hoverbox-img">
                            <img src="/pictures/refs/achievements/${characterId}-full.jpg"></img>
                        </div>
                        <div class="hoverbox-dsc">
                            <ul>
                                <li><div class="golden">${fullAchievementName}</div><li>
                                <li><div>${fullAchievementDescription}</div><li>
                            <ul>
                        </div>
                    </div>
                    `;
                }
            };
            const rect = event.target.getBoundingClientRect();
            const hoverboxWidth = characterDescriptions.offsetWidth;
            const hoverboxHeight = characterDescriptions.offsetHeight;
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            let leftPosition = rect.left + 100;
            let topPosition = rect.bottom - 100;
            console.log(topPosition)
            if (leftPosition + hoverboxWidth > viewportWidth) {
                leftPosition = rect.left - hoverboxWidth - 10;
            }

            if (leftPosition < 0) {
                leftPosition = 10;
            }

            if (topPosition > 780) {
                topPosition = 750;
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
                        for (let j = 548; j <= 580; j+=2) {
                            for (let k = 3; k > 0; k--) {
                                if (position === `${j}-${k}`) {
                                    position = `${j}`;
                                    let markAchievementDescription = achievementsData[position].split(': ')[1];
                                    let markAchievementName = achievementsData[position].split(': ')[0];
                                    markDescriptions.innerHTML = `
                                    <div class="hoverbox-img">
                                        <img src="/pictures/refs/achievements/${markId}.jpg"></img>
                                    </div>
                                    <div class="hoverbox-dsc">
                                        <ul>
                                            <li><div class='red'><a href="https://bindingofisaacrebirth.wiki.gg/wiki/${markAchievementName}">${markAchievementName}<a></div><li>
                                            <li><div>${markAchievementDescription}</div><li>
                                        <ul>
                                    </div>
                                    `;
                                    markDescriptions.style.display = 'block'
                                }
                            }
                        }
                        for (let j = 618; j <635; j++) {
                            if (position === `${j}-1`) {
                                position = `${j}`;
                                let markAchievementDescription = achievementsData[position].split(': ')[1];
                                let markAchievementName = achievementsData[position].split(': ')[0];
                                markDescriptions.innerHTML = `
                                <div class="hoverbox-img">
                                        <img src="/pictures/refs/achievements/${markId}.jpg"></img>
                                    </div>
                                    <div class="hoverbox-dsc">
                                        <ul>
                                            <li><div class='red'><a href="https://bindingofisaacrebirth.wiki.gg/wiki/${markAchievementName}">${markAchievementName}<a></div><li>
                                            <li><div>${markAchievementDescription}</div><li>
                                        <ul>
                                    </div>
                                    `;
                                markDescriptions.style.display = 'block'
                            }
                        }
                        let markAchievementDescription = achievementsData[position].split(': ')[1];
                        let markAchievementName = achievementsData[position].split(': ')[0];
                        markDescriptions.innerHTML = `
                        <div class="hoverbox-img">
                            <img src="/pictures/refs/achievements/${markId}.jpg"></img>
                        </div>
                        <div class="hoverbox-dsc">
                            <ul>
                                <li><div class='red'><a href="https://bindingofisaacrebirth.wiki.gg/wiki/${markAchievementName}">${markAchievementName}<a></div><li>
                                <li><div>${markAchievementDescription}</div><li>
                            <ul>
                        </div>
                        `;
                        markDescriptions.classList.add('show');
                    }
                }
            }
            const rect = event.target.getBoundingClientRect();
            const hoverboxWidth = markDescriptions.offsetWidth;
            const hoverboxHeight = markDescriptions.offsetHeight;
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            let leftPosition = rect.left + 40;
            let topPosition = rect.bottom - 40;
            console.log(topPosition)
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

function generateChallengeProgress(challengeMap) {
    challengegraphics.innerHTML = '';
    for (const [position, challengeId] of Object.entries(challengeMap)) {
        if (AchievementMap[position] === false) {
            let challengeAchievementDescription = achievementsData[position].split(': ').pop();
            challengegraphics.innerHTML += `
                <div class="challenges">
                    <h1>${challengeAchievementDescription}</h1>
                </div>`;
        }
    }
};

function generateEnemyProgress(enemyMap) {
    enemygraphics.innerHTML = '';
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

function getCharacterProgress() {
    return characterProgress;
};

function getChallengeProgress() {
    return challengeProgress;
};

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