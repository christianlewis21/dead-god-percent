const viewtoggle = document.getElementById("viewtoggle");
const taintedtoggle = document.getElementById("taintedtoggle");
const stylesheet = document.getElementById("stylesheet");
const advancedgraphics = document.getElementById("advancedgraphics");
const taintedgraphics = document.getElementById("taintedgraphics");
const positionBooleanMap = JSON.parse(localStorage.getItem("positionBooleanMap"));
const hoverbox = document.querySelector(".hoverbox");
const marks = document.getElementById("marks");

document.addEventListener("DOMContentLoaded", function() {
    generateCharacterSheets();
    checkCharacterUnlocks(positionBooleanMap)
    taintedgraphics.remove()
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
        document.body.appendChild(advancedgraphics);
        taintedgraphics.remove()
    }
});

taintedtoggle.addEventListener('click', function() {
    if (document.body.contains(advancedgraphics)) {
        advancedgraphics.remove()
        document.body.appendChild(taintedgraphics)
    } else {
        taintedgraphics.remove()
        document.body.appendChild(advancedgraphics)
    }
});

function generateCharacterSheets() {
    const characters = [
        { id: 1, name: '001isaac'},
        { id: 2, name: '002magdalene'},
        { id: 3, name: '003cain'},
        { id: 4, name: '004judas'},
        { id: 5, name: '005bluebaby'},
        { id: 6, name: '006eve'},
        { id: 7, name: '007samson'},
        { id: 8, name: '008azazel'},
        { id: 9, name: '009lazarus'},
        { id: 10, name: '010eden'},
        { id: 11, name: '011lost'},
        { id: 12, name: '012lilith'},
        { id: 13, name: '013keeper'},
        { id: 14, name: '014apollyon'},
        { id: 15, name: '015forgotten'},
        { id: 16, name: '016bethany'},
        { id: 17, name: '017jacob'},
        { id: 18, name: '001Tisaac'},
        { id: 19, name: '002Tmagdalene'},
        { id: 20, name: '003Tcain'},
        { id: 21, name: '004Tjudas'},
        { id: 22, name: '005Tbluebaby'},
        { id: 23, name: '006Teve'},
        { id: 24, name: '007Tsamson'},
        { id: 25, name: '008Tazazel'},
        { id: 26, name: '009Tlazarus'},
        { id: 27, name: '010Teden'},
        { id: 28, name: '011Tlost'},
        { id: 29, name: '012Tlilith'},
        { id: 30, name: '013Tkeeper'},
        { id: 31, name: '014Tapollyon'},
        { id: 32, name: '015Tforgotten'},
        { id: 33, name: '016Tbethany'},
        { id: 34, name: '017Tjacob'}
    ];
    
    const markMap = [
        { id: 1, name: 'Hheart'},
        { id: 2, name: 'Hcathedral'},
        { id: 3, name: 'Hsheol'},
        { id: 4, name: 'Hchest'},
        { id: 5, name: 'Hdarkroom'},
        { id: 6, name: 'Hmegasatan'},
        { id: 7, name: 'Hbossrush'},
        { id: 8, name: 'Hhush'},
        { id: 9, name: 'Hmother'},
        { id: 10, name: 'Hbeast'},
        { id: 11, name: 'Hgreed'}
    ]

    const advancedGraphicsHTML = characters.slice(0, 17).map(character => `
        <div class="completion">
            <img class='sheet' src="pictures/refs/marks/paper.png">
            <img class='character' id="character-${character.id}" src="pictures/refs/characters/${character.name}.png">
            ${markMap.map(mark => `
                <img class='mark mark-${mark.id}' id='mark-${mark.id}' src="pictures/refs/marks/${mark.name}.png">
            `).join('')}
        </div>
    `).join('');

    const taintedGraphicsHTML = characters.slice(17).map(character => `
        <div class="completion">
            <img class='sheet' src="pictures/refs/marks/Tpaper.png">
            <img class='character' id="character-${character.id}" src="pictures/refs/characters/${character.name}.png">
            ${markMap.map(mark => `
                <img class='mark mark-${mark.id}' id='mark-${mark.id}' src="pictures/refs/marks/${mark.name}.png">
            `).join('')}
        </div>
    `).join('');
    
    advancedgraphics.innerHTML = advancedGraphicsHTML;
    taintedgraphics.innerHTML = taintedGraphicsHTML;
}

function checkCharacterUnlocks(positionBooleanMap) {
    const characterMap = {
        '1': 'character-2', '2': 'character-3', '3': 'character-4', '32': 'character-5', '42': 'character-6', '67': 'character-7', 
        '79': 'character-8', '80': 'character-9', '81': 'character-10', '82': 'character-11', '199': 'character-12', 
        '251': 'character-13', '340': 'character-14', '390': 'character-15', '404': 'character-16', '405': 'character-17', '474': 'character-18',
        '475': 'character-19', '476': 'character-20', '477': 'character-21', '478': 'character-22', '479': 'character-23', '480': 'character-24', 
        '481': 'character-25', '482': 'character-26', '483': 'character-27', '484': 'character-28', '485': 'character-29', '486': 'character-30',
        '487': 'character-31', '488': 'character-32', '489': 'character-33', '490': 'character-34'
    };

    for (const [position, characterId] of Object.entries(characterMap)) {
        if (positionBooleanMap[position] === false) {
            document.getElementById(characterId).classList.add('grayscale');
        }
    }
}

function checkCharacterMarks() {
    
}