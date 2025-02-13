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

const characterAchievementMap = {
    '-1': 'character-1',
    '1': 'character-2',
    '2': 'character-3',
    '3': 'character-4',
    '32': 'character-5',
    '42': 'character-6',
    '67': 'character-7', 
    '79': 'character-8',
    '80': 'character-9',
    '81': 'character-10',
    '82': 'character-11',
    '199': 'character-12', 
    '251': 'character-13',
    '340': 'character-14',
    '390': 'character-15',
    '404': 'character-16',
    '405': 'character-17',
    '474': 'character-18',
    '475': 'character-19',
    '476': 'character-20',
    '477': 'character-21',
    '478': 'character-22',
    '479': 'character-23',
    '480': 'character-24', 
    '481': 'character-25',
    '482': 'character-26',
    '483': 'character-27',
    '484': 'character-28',
    '485': 'character-29',
    '486': 'character-30',
    '487': 'character-31',
    '488': 'character-32',
    '489': 'character-33',
    '490': 'character-34'
};

const markAchievementMap = {
    1: { /* Isaac */
        '167': 'mark-1-1', '106': 'mark-1-2', '43': 'mark-1-3', '49': 'mark-1-4', '149': 'mark-1-5', '205': 'mark-1-6', '70': 'mark-1-7', '179': 'mark-1-8', '440': 'mark-1-9', '441': 'mark-1-10', '296': 'mark-1-11'
    },
    2: { /* Maggy */
        '168': 'mark-2-1', '20': 'mark-2-2', '45': 'mark-2-3', '50': 'mark-2-4', '71': 'mark-2-5', '206': 'mark-2-6', '109': 'mark-2-7', '180': 'mark-2-8', '442': 'mark-2-9', '443': 'mark-2-10', '297': 'mark-2-11'
    },
    3: { /* Cain */
        '171': 'mark-3-1', '21': 'mark-3-2', '46': 'mark-3-3', '75': 'mark-3-4', '51': 'mark-3-5', '207': 'mark-3-6', '110': 'mark-3-7', '181': 'mark-3-8', '444': 'mark-3-9', '445': 'mark-3-10', '298': 'mark-3-11'
    },
    4: { /* Judas */
        '170': 'mark-4-1', '107': 'mark-4-2', '72': 'mark-4-3', '77': 'mark-4-4', '52': 'mark-4-5', '208': 'mark-4-6', '108': 'mark-4-7', '182': 'mark-4-8', '446': 'mark-4-9', '447': 'mark-4-10', '299': 'mark-4-11'
    },
    5: { /* Blue baby */
        '174': 'mark-5-1', '29': 'mark-5-2', '48': 'mark-5-3', '113': 'mark-5-4', '73': 'mark-5-5', '209': 'mark-5-6', '114': 'mark-5-7', '183': 'mark-5-8', '448': 'mark-5-9', '449': 'mark-5-10', '300': 'mark-5-11'
    },
    6: { /* Eve */
        '169': 'mark-6-1', '76': 'mark-6-2', '44': 'mark-6-3', '53': 'mark-6-4', '111': 'mark-6-5', '210': 'mark-6-6', '112': 'mark-6-7', '184': 'mark-6-8', '450': 'mark-6-9', '451': 'mark-6-10', '302': 'mark-6-11'
    },
    7: { /* Samson */
        '177': 'mark-7-1', '54': 'mark-7-2', '56': 'mark-7-3', '55': 'mark-7-4', '74': 'mark-7-5', '211': 'mark-7-6', '115': 'mark-7-7', '185': 'mark-7-8', '452': 'mark-7-9', '453': 'mark-7-10', '301': 'mark-7-11'
    },
    8: { /* Azazel */
        '173': 'mark-8-1', '126': 'mark-8-2', '127': 'mark-8-3', '128': 'mark-8-4', '47': 'mark-8-5', '212': 'mark-8-6', '9': 'mark-8-7', '186': 'mark-8-8', '454': 'mark-8-9', '455': 'mark-8-10', '304': 'mark-8-11'
    },
    9: { /* Lazarus */
        '172': 'mark-9-1', '116': 'mark-9-2', '117': 'mark-9-3', '118': 'mark-9-4', '119': 'mark-9-5', '213': 'mark-9-6', '105': 'mark-9-7', '187': 'mark-9-8', '456': 'mark-9-9', '457': 'mark-9-10', '305': 'mark-9-11'
    },
    10: { /* Eden */
        '176': 'mark-10-1', '121': 'mark-10-2', '122': 'mark-10-3', '123': 'mark-10-4', '124': 'mark-10-5', '214': 'mark-10-6', '125': 'mark-10-7', '188': 'mark-10-8', '458': 'mark-10-9', '459': 'mark-10-10', '303': 'mark-10-11'
    },
    11: { /* Lost */
        '175': 'mark-11-1', '129': 'mark-11-2', '130': 'mark-11-3', '131': 'mark-11-4', '132': 'mark-11-5', '215': 'mark-11-6', '133': 'mark-11-7', '189': 'mark-11-8', '460': 'mark-11-9', '461': 'mark-11-10', '307': 'mark-11-11'
    },
    12: { /* Lilith */
        '223': 'mark-12-1', '218': 'mark-12-2', '220': 'mark-12-3', '219': 'mark-12-4', '221': 'mark-12-5', '216': 'mark-12-6', '222': 'mark-12-7', '190': 'mark-12-8', '462': 'mark-12-9', '463': 'mark-12-10', '306': 'mark-12-11'
    },
    13: { /* Keeper */
        '241': 'mark-13-1', '236': 'mark-13-2', '237': 'mark-13-3', '238': 'mark-13-4', '239': 'mark-13-5', '217': 'mark-13-6', '240': 'mark-13-7', '191': 'mark-13-8', '464': 'mark-13-9', '465': 'mark-13-10', '308': 'mark-13-11'
    },
    14: { /* Apollyon */
        '318': 'mark-14-1', '310': 'mark-14-2', '311': 'mark-14-3', '312': 'mark-14-4', '313': 'mark-14-5', '317': 'mark-14-6', '314': 'mark-14-7', '315': 'mark-14-8', '466': 'mark-14-9', '467': 'mark-14-10', '309': 'mark-14-11'
    },
    15: { /* Forgotten */
        '392': 'mark-15-1', '393': 'mark-15-2', '394': 'mark-15-3', '395': 'mark-15-4', '396': 'mark-15-5', '403': 'mark-15-6', '397': 'mark-15-7', '398': 'mark-15-8', '468': 'mark-15-9', '469': 'mark-15-10', '400': 'mark-15-11'
    },
    16: { /* Bethany */
        '416': 'mark-16-1', '417': 'mark-16-2', '418': 'mark-16-3', '419': 'mark-16-4', '420': 'mark-16-5', '427': 'mark-16-6', '421': 'mark-16-7', '423': 'mark-16-8', '470': 'mark-16-9', '471': 'mark-16-10', '424': 'mark-16-11'
    },
    17: { /* Jacob */
        '428': 'mark-17-1', '429': 'mark-17-2', '430': 'mark-17-3', '431': 'mark-17-4', '432': 'mark-17-5', '439': 'mark-17-6', '433': 'mark-17-7', '435': 'mark-17-8', '472': 'mark-17-9', '473': 'mark-17-10', '436': 'mark-17-11'
    },
    18: { /*T Isaac */
        '0': 'mark-18-1', '548': 'mark-18-2', '548': 'mark-18-3', '548': 'mark-18-4', '548': 'mark-18-5', '601': 'mark-18-6', '618': 'mark-18-7', '618': 'mark-18-8', '549': 'mark-18-9', '491': 'mark-18-10', '541': 'mark-18-11'
    },
    19: { /*T Maggy */
        '0': 'mark-19-1', '550': 'mark-19-2', '550': 'mark-19-3', '550': 'mark-19-4', '550': 'mark-19-5', '602': 'mark-19-6', '619': 'mark-19-7', '619': 'mark-19-8', '551': 'mark-19-9', '492': 'mark-19-10', '530': 'mark-19-11'
    },
    20: { /*T Cain */
        '0': 'mark-20-1', '552': 'mark-20-2', '552': 'mark-20-3', '552': 'mark-20-4', '552': 'mark-20-5', '603': 'mark-20-6', '620': 'mark-20-7', '620': 'mark-20-8', '553': 'mark-20-9', '493': 'mark-20-10', '534': 'mark-20-11'
    },
    21: { /*T Judas */
        '0': 'mark-21-1', '554': 'mark-21-2', '554': 'mark-21-3', '554': 'mark-21-4', '554': 'mark-21-5', '604': 'mark-21-6', '621': 'mark-21-7', '621': 'mark-21-8', '555': 'mark-21-9', '494': 'mark-21-10', '525': 'mark-21-11'
    },
    22: { /*T Blue baby */
        '0': 'mark-22-1', '556': 'mark-22-2', '556': 'mark-22-3', '556': 'mark-22-4', '556': 'mark-22-5', '605': 'mark-22-6', '622': 'mark-22-7', '622': 'mark-22-8', '557': 'mark-22-9', '495': 'mark-22-10', '528': 'mark-22-11'
    },
    23: { /*T Eve */
        '0': 'mark-23-1', '558': 'mark-23-2', '558': 'mark-23-3', '558': 'mark-23-4', '558': 'mark-23-5', '606': 'mark-23-6', '623': 'mark-23-7', '623': 'mark-23-8', '559': 'mark-23-9', '496': 'mark-23-10', '527': 'mark-23-11'
    },
    24: { /*T Samson */
        '0': 'mark-24-1', '560': 'mark-24-2', '560': 'mark-24-3', '560': 'mark-24-4', '560': 'mark-24-5', '607': 'mark-24-6', '624': 'mark-24-7', '624': 'mark-24-8', '561': 'mark-24-9', '497': 'mark-24-10', '535': 'mark-24-11'
    },
    25: { /*T Azazel */
        '0': 'mark-25-1', '562': 'mark-25-2', '562': 'mark-25-3', '562': 'mark-25-4', '562': 'mark-25-5', '608': 'mark-25-6', '625': 'mark-25-7', '625': 'mark-25-8', '563': 'mark-25-9', '498': 'mark-25-10', '539': 'mark-25-11'
    },
    26: { /*T Lazarus */
        '0': 'mark-26-1', '564': 'mark-26-2', '564': 'mark-26-3', '564': 'mark-26-4', '564': 'mark-26-5', '609': 'mark-26-6', '626': 'mark-26-7', '626': 'mark-26-8', '565': 'mark-26-9', '499': 'mark-26-10', '543': 'mark-26-11'
    },
    27: { /*T Eden */
        '0': 'mark-27-1', '566': 'mark-27-2', '566': 'mark-27-3', '566': 'mark-27-4', '566': 'mark-27-5', '610': 'mark-27-6', '627': 'mark-27-7', '627': 'mark-27-8', '567': 'mark-27-9', '500': 'mark-27-10', '544': 'mark-27-11'
    },
    28: { /*T Lost */
        '0': 'mark-28-1', '568': 'mark-28-2', '568': 'mark-28-3', '568': 'mark-28-4', '568': 'mark-28-5', '611': 'mark-28-6', '628': 'mark-28-7', '628': 'mark-28-8', '569': 'mark-28-9', '501': 'mark-28-10', '524': 'mark-28-11'
    },
    29: { /*T Lilith */
        '0': 'mark-29-1', '570': 'mark-29-2', '570': 'mark-29-3', '570': 'mark-29-4', '570': 'mark-29-5', '612': 'mark-29-6', '629': 'mark-29-7', '629': 'mark-29-8', '571': 'mark-29-9', '502': 'mark-29-10', '526': 'mark-29-11'
    },
    30: { /*T Keeper */
        '0': 'mark-30-1', '572': 'mark-30-2', '572': 'mark-30-3', '572': 'mark-30-4', '572': 'mark-30-5', '613': 'mark-30-6', '630': 'mark-30-7', '630': 'mark-30-8', '573': 'mark-30-9', '503': 'mark-30-10', '536': 'mark-30-11'
    },
    31: { /*T Apollyon */
        '0': 'mark-31-1', '574': 'mark-31-2', '574': 'mark-31-3', '574': 'mark-31-4', '574': 'mark-31-5', '614': 'mark-31-6', '631': 'mark-31-7', '631': 'mark-31-8', '575': 'mark-31-9', '504': 'mark-31-10', '540': 'mark-31-11'
    },
    32: { /*T Forgotten */
        '0': 'mark-32-1', '576': 'mark-32-2', '576': 'mark-32-3', '576': 'mark-32-4', '576': 'mark-32-5', '615': 'mark-32-6', '632': 'mark-32-7', '632': 'mark-32-8', '577': 'mark-32-9', '505': 'mark-32-10', '537': 'mark-32-11'
    },
    33: { /*T Bethany */
        '0': 'mark-33-1', '578': 'mark-33-2', '578': 'mark-33-3', '578': 'mark-33-4', '578': 'mark-33-5', '616': 'mark-33-6', '633': 'mark-33-7', '633': 'mark-33-8', '579': 'mark-33-9', '506': 'mark-33-10', '529': 'mark-33-11'
    },
    34: { /*T Jacob */
        '0': 'mark-34-1', '580': 'mark-34-2', '580': 'mark-34-3', '580': 'mark-34-4', '580': 'mark-34-5', '617': 'mark-34-6', '634': 'mark-34-7', '634': 'mark-34-8', '581': 'mark-34-9', '507': 'mark-34-10', '542': 'mark-34-11'
    },
};

let achievementsData = {};

fetch('achievements.json')
    .then(response => response.json())
    .then(data => {
        achievementsData = data;
    })

document.addEventListener("DOMContentLoaded", function() {
    generateCharacterSheets();
    checkCharacterUnlocks(characterAchievementMap, markAchievementMap)
    taintedgraphics.remove()
    generateAllDescriptions(characterDescriptions, markDescriptions)
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
        generateAllDescriptions(taintedCharacterDescriptions, taintedMarkDescriptions)
    } else {
        taintedgraphics.remove()
        document.body.appendChild(advancedgraphics)
        generateAllDescriptions(characterDescriptions, markDescriptions);
    }
    
    generateAllDescriptions(
        document.body.contains(taintedgraphics) ? taintedCharacterDescriptions : characterDescriptions,
        document.body.contains(taintedgraphics) ? taintedMarkDescriptions : markDescriptions
    );
});

function generateAllDescriptions(characterDescriptions, markDescriptions) {
    document.querySelectorAll('.character').forEach(character => {
        character.addEventListener('mouseenter', function(event) {
            generateCharacterDescriptions(character, characterDescriptions);
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
            generateMarkDescriptions(mark, markDescriptions);
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

function generateCharacterDescriptions(character, characterDescriptions) {
    for (const [position, characterId] of Object.entries(characterAchievementMap)) {
        if (characterId === character.id) {
            const characterAchievementDescription = achievementsData[position].split(': ').pop();
            characterDescriptions.innerHTML = `<div>${characterAchievementDescription}</div>`;
            characterDescriptions.style.display = 'block';
        }
    }
}

function generateMarkDescriptions(mark, markDescriptions) {
    const characterId = mark.getAttribute('data-character-id');
    for (const [position, markId] of Object.entries(markAchievementMap[characterId])) {
        if (markId === mark.id) {
            const markAchievementDescription = achievementsData[position].split(': ').pop();
            markDescriptions.innerHTML = `<div>${markAchievementDescription}</div>`;
            markDescriptions.style.display = 'block';
        }
    }
}

function generateCharacterSheets() {
    const characterMap = [
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

    const advancedGraphicsHTML = characterMap.slice(0, 17).map(character => `
        <div class="completion">
            <img class='sheet' src="pictures/refs/marks/paper.png">
            <img class='character' id="character-${character.id}" src="pictures/refs/characters/${character.name}.png">
            ${markMap.map(mark => `
                <img class='mark mark-${character.id}-${mark.id}' id='mark-${character.id}-${mark.id}' data-character-id='${character.id}' src="pictures/refs/marks/${mark.name}.png">
            `).join('')}
        </div>
    `).join('');

    const taintedGraphicsHTML = characterMap.slice(17).map(character => `
        <div class="completion">
            <img class='sheet' src="pictures/refs/marks/Tpaper.png">
            <img class='character' id="character-${character.id}" src="pictures/refs/characters/${character.name}.png">
            ${markMap.map(mark => `
                <img class='mark mark-${character.id}-${mark.id}' id='mark-${character.id}-${mark.id}' data-character-id='${character.id}' src="pictures/refs/marks/${mark.name}.png">
            `).join('')}
        </div>
    `).join('');
    
    advancedgraphics.innerHTML = advancedGraphicsHTML;
    taintedgraphics.innerHTML = taintedGraphicsHTML;
}

function checkCharacterUnlocks(characterAchievementMap, markAchievementMap) {
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
    .mark-${i}-11 { top: 18%; left: 76%; } /* greed */
  `).join('')}
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);