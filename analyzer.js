const viewtoggle = document.getElementById("viewtoggle");
const taintedtoggle = document.getElementById("taintedtoggle");
const stylesheet = document.getElementById("stylesheet");
const advancedgraphics = document.getElementById("advancedgraphics");
const taintedgraphics = document.getElementById("taintedgraphics");
const AchievementMap = JSON.parse(localStorage.getItem("positionBooleanMap"));
const characterDescriptions = document.getElementById('characterdescriptions')
const markDescriptions = document.getElementById('markdescriptions')
const taintedCharacterDescriptions = document.getElementById('taintedcharacterdescriptions')
const taintedMarkDescriptions = document.getElementById('taintedmarkdescriptions')
const characterButton = document.getElementById('characterbutton')
const challengeButton = document.getElementById('challengebutton')
const challengegraphics = document.getElementById('challengegraphics')
let checked = false;
let achievementsData = {};

fetch('achievements.json')
    .then(response => response.json())
    .then(data => {
        achievementsData = data;
    })

document.addEventListener("DOMContentLoaded", function() {
    generateSheets(characterMap, markMap);
    checkCharacterUnlocks(characterAchievementMap, markAchievementMap, true, deliriumMap, taintedDeliriumMap, fullMap)
    generateDescriptions(characterDescriptions, markDescriptions)
    generateChallengeProgress(challengeMap)
    taintedgraphics.remove();
    challengegraphics.remove();
});

viewtoggle.addEventListener("click", function() {
    if (stylesheet.getAttribute("href") === "analyzerstyles.css") {
        stylesheet.setAttribute("href", "simple.css");
        advancedgraphics.remove()
        taintedgraphics.remove()
        const data = localStorage.getItem("processedData");
        if (data) {
            document.getElementById("fileContent").textContent = data;
        }

    } else {
        stylesheet.setAttribute("href", "analyzerstyles.css");
        fileContent.textContent = '';
        if (checked) {
            document.body.appendChild(taintedgraphics);
        }
        else {
            document.body.appendChild(advancedgraphics);
        }
    }
});

taintedtoggle.addEventListener('click', function() {
    checked = !checked;
    if (checked) {
        advancedgraphics.remove()
        document.body.appendChild(taintedgraphics)
        checkCharacterUnlocks(characterAchievementMap, markAchievementMap, false, deliriumMap, taintedDeliriumMap, fullMap)
    } else if (!checked) {
        taintedgraphics.remove()
        document.body.appendChild(advancedgraphics)
    }
});

characterButton.addEventListener('click', function() {
    challengegraphics.remove()
    console.log(taintedtoggle)
    if (checked) {
        document.body.appendChild(taintedgraphics);
    }
    else {
        document.body.appendChild(advancedgraphics);
    }
});

challengeButton.addEventListener('click', function() {
    advancedgraphics.remove()
    taintedgraphics.remove()
    document.body.appendChild(challengegraphics);
});

function generateChallengeProgress(challengeMap) {
    challengegraphics.innerHTML = challengeMap.map(challenge => `
    <div class="challenges">
        <h1>${challenge.name}</h1>
    </div>`
    ).join('')
};

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
}

function checkCharacterUnlocks(characterAchievementMap, markAchievementMap, value, deliriumMap, taintedDeliriumMap, fullMap) {
    if (value) {
        for (const [position, characterId] of Object.entries(characterAchievementMap)) {
            if (AchievementMap[position] === false) {
                document.getElementById(characterId).classList.add('grayscale');
            }
        }
    
        for (let i = 1; i <= 34; i++) {
            for (const [position, markId] of Object.entries(markAchievementMap[i])) {
                if (AchievementMap[position] === false) {
                    document.getElementById(markId).classList.add('grayscale');
                }
            }        
        }
        for (let i = 18; i <= 34; i++) {     
            for (let j = 4; j > 1; j--) {
                if (document.getElementById(`mark-${i}-5`).classList.contains('grayscale')) {
                    document.getElementById(`mark-${i}-${j}`).classList.add('grayscale');
                }
            }
    
            if (document.getElementById(`mark-${i}-8`).classList.contains('grayscale')) {
                document.getElementById(`mark-${i}-7`).classList.add('grayscale');
            }
        }
        for (const [position, paperId] of Object.entries(deliriumMap)) {
            if (!AchievementMap[position]) {
                document.getElementById(paperId).classList.add('grayscale');
            } 
        }
        for (const [position, characterId] of Object.entries(fullMap)) {
            if (AchievementMap[position]) {
                document.getElementById(characterId).classList.add('golden');
            }
        }
    }
    else {
        for (const [position, paperId] of Object.entries(taintedDeliriumMap)) {
            if (!AchievementMap[position]) {
                document.getElementById(paperId).classList.add('grayscale');
            } 
        }
    }

}

function generateDescriptions(characterDescriptions, markDescriptions) {
    document.querySelectorAll('.character').forEach(character => {
        character.addEventListener('mouseenter', function(event) {
            for (const [position, characterId] of Object.entries(characterAchievementMap)) {
                if (characterId === character.id) {
                    const characterAchievementDescription = achievementsData[position].split(': ').pop();
                    characterDescriptions.innerHTML = `<div>${characterAchievementDescription}</div>`;
                    characterDescriptions.style.display = 'block';
                }
            };
            characterDescriptions.style.display = 'block';
            const rect = event.target.getBoundingClientRect();
            characterDescriptions.style.top = `${rect.top}px`;
            characterDescriptions.style.left = `${rect.left + 70}px`;
        });

        character.addEventListener('mouseleave', function() {
            characterDescriptions.style.display = 'none';
        });
    });
    
    document.querySelectorAll('.mark').forEach(mark => {
        mark.addEventListener('mouseenter', function(event) {
            for (let i = 1; i <= 34; i++) {
                for (let [position, markId] of Object.entries(markAchievementMap[i])) {
                    if (markId === mark.id) {
                        for (let j = 548; j <= 580; j+=2) {
                            for (let k = 3; k > 0; k--) {
                                if (position === `${j}-${k}`) {
                                    position = `${j}`;
                                    let markAchievementDescription = achievementsData[position].split(': ').pop();
                                    markDescriptions.innerHTML = `<div>${markAchievementDescription}</div>`;
                                    markDescriptions.style.display = 'block'
                                }
                            }
                        }
                        for (let j = 618; j <635; j++) {
                            if (position === `${j}-1`) {
                                position = `${j}`;
                                let markAchievementDescription = achievementsData[position].split(': ').pop();
                                markDescriptions.innerHTML = `<div>${markAchievementDescription}</div>`;
                                markDescriptions.style.display = 'block'
                            }
                        }
                        let markAchievementDescription = achievementsData[position].split(': ').pop();
                        markDescriptions.innerHTML = `<div>${markAchievementDescription}</div>`;
                        markDescriptions.style.display = 'block'
                    }
                }
            }
            markDescriptions.style.display = 'block';
            const rect = event.target.getBoundingClientRect();
            markDescriptions.style.top = `${rect.top}px`;
            markDescriptions.style.left = `${rect.left + 30}px`;
        });

        mark.addEventListener('mouseleave', function() {
            markDescriptions.style.display = 'none';
        });
    })
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