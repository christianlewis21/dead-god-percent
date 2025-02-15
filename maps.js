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
    { id: 34, name: '017Tjacob'},
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
    { id: 11, name: 'Hgreed'},
    { id: 12, name: 'greed'},
];

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
    '490': 'character-34',
};

const markAchievementMap = {
    1: { /* Isaac */
        '167': 'mark-1-1', '106': 'mark-1-2', '43': 'mark-1-3', '49': 'mark-1-4', '149': 'mark-1-5', '205': 'mark-1-6', '70': 'mark-1-7', '179': 'mark-1-8', '440': 'mark-1-9', '441': 'mark-1-10', '296': 'mark-1-11', '192': 'mark-1-12'
    },
    2: { /* Maggy */
        '168': 'mark-2-1', '20': 'mark-2-2', '45': 'mark-2-3', '50': 'mark-2-4', '71': 'mark-2-5', '206': 'mark-2-6', '109': 'mark-2-7', '180': 'mark-2-8', '442': 'mark-2-9', '443': 'mark-2-10', '297': 'mark-2-11', '193': 'mark-2-12'
    },
    3: { /* Cain */
        '171': 'mark-3-1', '21': 'mark-3-2', '46': 'mark-3-3', '75': 'mark-3-4', '51': 'mark-3-5', '207': 'mark-3-6', '110': 'mark-3-7', '181': 'mark-3-8', '444': 'mark-3-9', '445': 'mark-3-10', '298': 'mark-3-11', '194': 'mark-3-12'
    },
    4: { /* Judas */
        '170': 'mark-4-1', '107': 'mark-4-2', '72': 'mark-4-3', '77': 'mark-4-4', '52': 'mark-4-5', '208': 'mark-4-6', '108': 'mark-4-7', '182': 'mark-4-8', '446': 'mark-4-9', '447': 'mark-4-10', '299': 'mark-4-11', '195': 'mark-4-12'
    },
    5: { /* Blue baby */
        '174': 'mark-5-1', '29': 'mark-5-2', '48': 'mark-5-3', '113': 'mark-5-4', '73': 'mark-5-5', '209': 'mark-5-6', '114': 'mark-5-7', '183': 'mark-5-8', '448': 'mark-5-9', '449': 'mark-5-10', '300': 'mark-5-11', '196': 'mark-5-12'
    },
    6: { /* Eve */
        '169': 'mark-6-1', '76': 'mark-6-2', '44': 'mark-6-3', '53': 'mark-6-4', '111': 'mark-6-5', '210': 'mark-6-6', '112': 'mark-6-7', '184': 'mark-6-8', '450': 'mark-6-9', '451': 'mark-6-10', '302': 'mark-6-11', '197': 'mark-6-12'
    },
    7: { /* Samson */
        '177': 'mark-7-1', '54': 'mark-7-2', '56': 'mark-7-3', '55': 'mark-7-4', '74': 'mark-7-5', '211': 'mark-7-6', '115': 'mark-7-7', '185': 'mark-7-8', '452': 'mark-7-9', '453': 'mark-7-10', '301': 'mark-7-11', '198': 'mark-7-12'
    },
    8: { /* Azazel */
        '173': 'mark-8-1', '126': 'mark-8-2', '127': 'mark-8-3', '128': 'mark-8-4', '47': 'mark-8-5', '212': 'mark-8-6', '9': 'mark-8-7', '186': 'mark-8-8', '454': 'mark-8-9', '455': 'mark-8-10', '304': 'mark-8-11', '199': 'mark-8-12'
    },
    9: { /* Lazarus */
        '172': 'mark-9-1', '116': 'mark-9-2', '117': 'mark-9-3', '118': 'mark-9-4', '119': 'mark-9-5', '213': 'mark-9-6', '105': 'mark-9-7', '187': 'mark-9-8', '456': 'mark-9-9', '457': 'mark-9-10', '305': 'mark-9-11', '200': 'mark-9-12'
    },
    10: { /* Eden */
        '176': 'mark-10-1', '121': 'mark-10-2', '122': 'mark-10-3', '123': 'mark-10-4', '124': 'mark-10-5', '214': 'mark-10-6', '125': 'mark-10-7', '188': 'mark-10-8', '458': 'mark-10-9', '459': 'mark-10-10', '303': 'mark-10-11', '201': 'mark-10-12'
    },
    11: { /* Lost */
        '175': 'mark-11-1', '129': 'mark-11-2', '130': 'mark-11-3', '131': 'mark-11-4', '132': 'mark-11-5', '215': 'mark-11-6', '133': 'mark-11-7', '189': 'mark-11-8', '460': 'mark-11-9', '461': 'mark-11-10', '307': 'mark-11-11', '202': 'mark-11-12'
    },
    12: { /* Lilith */
        '223': 'mark-12-1', '218': 'mark-12-2', '220': 'mark-12-3', '219': 'mark-12-4', '221': 'mark-12-5', '216': 'mark-12-6', '222': 'mark-12-7', '190': 'mark-12-8', '462': 'mark-12-9', '463': 'mark-12-10', '306': 'mark-12-11', '203': 'mark-12-12'
    },
    13: { /* Keeper */
        '241': 'mark-13-1', '236': 'mark-13-2', '237': 'mark-13-3', '238': 'mark-13-4', '239': 'mark-13-5', '217': 'mark-13-6', '240': 'mark-13-7', '191': 'mark-13-8', '464': 'mark-13-9', '465': 'mark-13-10', '308': 'mark-13-11', '204': 'mark-13-12'
    },
    14: { /* Apollyon */
        '318': 'mark-14-1', '310': 'mark-14-2', '311': 'mark-14-3', '312': 'mark-14-4', '313': 'mark-14-5', '317': 'mark-14-6', '314': 'mark-14-7', '315': 'mark-14-8', '466': 'mark-14-9', '467': 'mark-14-10', '309': 'mark-14-11', '316': 'mark-14-12'
    },
    15: { /* Forgotten */
        '392': 'mark-15-1', '393': 'mark-15-2', '394': 'mark-15-3', '395': 'mark-15-4', '396': 'mark-15-5', '403': 'mark-15-6', '397': 'mark-15-7', '398': 'mark-15-8', '468': 'mark-15-9', '469': 'mark-15-10', '400': 'mark-15-11', '399': 'mark-15-12'
    },
    16: { /* Bethany */
        '416': 'mark-16-1', '417': 'mark-16-2', '418': 'mark-16-3', '419': 'mark-16-4', '420': 'mark-16-5', '427': 'mark-16-6', '421': 'mark-16-7', '423': 'mark-16-8', '470': 'mark-16-9', '471': 'mark-16-10', '424': 'mark-16-11', '422': 'mark-16-12'
    },
    17: { /* Jacob */
        '428': 'mark-17-1', '429': 'mark-17-2', '430': 'mark-17-3', '431': 'mark-17-4', '432': 'mark-17-5', '439': 'mark-17-6', '433': 'mark-17-7', '435': 'mark-17-8', '472': 'mark-17-9', '473': 'mark-17-10', '436': 'mark-17-11', '434': 'mark-17-12'
    },
    18: { /*T Isaac */
        '0': 'mark-18-1', '548-1': 'mark-18-2', '548-2': 'mark-18-3', '548-3': 'mark-18-4', '548': 'mark-18-5', '601': 'mark-18-6', '618-1': 'mark-18-7', '618': 'mark-18-8', '549': 'mark-18-9', '491': 'mark-18-10', '541': 'mark-18-11'
    },
    19: { /*T Maggy */
        '0': 'mark-19-1', '550-1': 'mark-19-2', '550-2': 'mark-19-3', '550-3': 'mark-19-4', '550': 'mark-19-5', '602': 'mark-19-6', '619-1': 'mark-19-7', '619': 'mark-19-8', '551': 'mark-19-9', '492': 'mark-19-10', '530': 'mark-19-11'
    },
    20: { /*T Cain */
        '0': 'mark-20-1', '552-1': 'mark-20-2', '552-2': 'mark-20-3', '552-3': 'mark-20-4', '552': 'mark-20-5', '603': 'mark-20-6', '620-1': 'mark-20-7', '620': 'mark-20-8', '553': 'mark-20-9', '493': 'mark-20-10', '534': 'mark-20-11'
    },
    21: { /*T Judas */
        '0': 'mark-21-1', '554-1': 'mark-21-2', '554-2': 'mark-21-3', '554-3': 'mark-21-4', '554': 'mark-21-5', '604': 'mark-21-6', '621-1': 'mark-21-7', '621': 'mark-21-8', '555': 'mark-21-9', '494': 'mark-21-10', '525': 'mark-21-11'
    },
    22: { /*T Blue baby */
        '0': 'mark-22-1', '556-1': 'mark-22-2', '556-2': 'mark-22-3', '556-3': 'mark-22-4', '556': 'mark-22-5', '605': 'mark-22-6', '622-1': 'mark-22-7', '622': 'mark-22-8', '557': 'mark-22-9', '495': 'mark-22-10', '528': 'mark-22-11'
    },
    23: { /*T Eve */
        '0': 'mark-23-1', '558-1': 'mark-23-2', '558-2': 'mark-23-3', '558-3': 'mark-23-4', '558': 'mark-23-5', '606': 'mark-23-6', '623-1': 'mark-23-7', '623': 'mark-23-8', '559': 'mark-23-9', '496': 'mark-23-10', '527': 'mark-23-11'
    },
    24: { /*T Samson */
        '0': 'mark-24-1', '560-1': 'mark-24-2', '560-2': 'mark-24-3', '560-3': 'mark-24-4', '560': 'mark-24-5', '607': 'mark-24-6', '624-1': 'mark-24-7', '624': 'mark-24-8', '561': 'mark-24-9', '497': 'mark-24-10', '535': 'mark-24-11'
    },
    25: { /*T Azazel */
        '0': 'mark-25-1', '562-1': 'mark-25-2', '562-2': 'mark-25-3', '562-3': 'mark-25-4', '562': 'mark-25-5', '608': 'mark-25-6', '625-1': 'mark-25-7', '625': 'mark-25-8', '563': 'mark-25-9', '498': 'mark-25-10', '539': 'mark-25-11'
    },
    26: { /*T Lazarus */
        '0': 'mark-26-1', '564-1': 'mark-26-2', '564-2': 'mark-26-3', '564-3': 'mark-26-4', '564': 'mark-26-5', '609': 'mark-26-6', '626-1': 'mark-26-7', '626': 'mark-26-8', '565': 'mark-26-9', '499': 'mark-26-10', '543': 'mark-26-11'
    },
    27: { /*T Eden */
        '0': 'mark-27-1', '566-1': 'mark-27-2', '566-2': 'mark-27-3', '566-3': 'mark-27-4', '566': 'mark-27-5', '610': 'mark-27-6', '627-1': 'mark-27-7', '627': 'mark-27-8', '567': 'mark-27-9', '500': 'mark-27-10', '544': 'mark-27-11'
    },
    28: { /*T Lost */
        '0': 'mark-28-1', '568-1': 'mark-28-2', '568-2': 'mark-28-3', '568-3': 'mark-28-4', '568': 'mark-28-5', '611': 'mark-28-6', '628-1': 'mark-28-7', '628': 'mark-28-8', '569': 'mark-28-9', '501': 'mark-28-10', '524': 'mark-28-11'
    },
    29: { /*T Lilith */
        '0': 'mark-29-1', '570-1': 'mark-29-2', '570-2': 'mark-29-3', '570-3': 'mark-29-4', '570': 'mark-29-5', '612': 'mark-29-6', '629-1': 'mark-29-7', '629': 'mark-29-8', '571': 'mark-29-9', '502': 'mark-29-10', '526': 'mark-29-11'
    },
    30: { /*T Keeper */
        '0': 'mark-30-1', '572-1': 'mark-30-2', '572-2': 'mark-30-3', '572-3': 'mark-30-4', '572': 'mark-30-5', '613': 'mark-30-6', '630-1': 'mark-30-7', '630': 'mark-30-8', '573': 'mark-30-9', '503': 'mark-30-10', '536': 'mark-30-11'
    },
    31: { /*T Apollyon */
        '0': 'mark-31-1', '574-1': 'mark-31-2', '574-2': 'mark-31-3', '574-3': 'mark-31-4', '574': 'mark-31-5', '614': 'mark-31-6', '631-1': 'mark-31-7', '631': 'mark-31-8', '575': 'mark-31-9', '504': 'mark-31-10', '540': 'mark-31-11'
    },
    32: { /*T Forgotten */
        '0': 'mark-32-1', '576-1': 'mark-32-2', '576-2': 'mark-32-3', '576-3': 'mark-32-4', '576': 'mark-32-5', '615': 'mark-32-6', '632-1': 'mark-32-7', '632': 'mark-32-8', '577': 'mark-32-9', '505': 'mark-32-10', '537': 'mark-32-11'
    },
    33: { /*T Bethany */
        '0': 'mark-33-1', '578-1': 'mark-33-2', '578-2': 'mark-33-3', '578-3': 'mark-33-4', '578': 'mark-33-5', '616': 'mark-33-6', '633-1': 'mark-33-7', '633': 'mark-33-8', '579': 'mark-33-9', '506': 'mark-33-10', '529': 'mark-33-11'
    },
    34: { /*T Jacob */
        '0': 'mark-34-1', '580-1': 'mark-34-2', '580-2': 'mark-34-3', '580-3': 'mark-34-4', '580': 'mark-34-5', '617': 'mark-34-6', '634-1': 'mark-34-7', '634': 'mark-34-8', '581': 'mark-34-9', '507': 'mark-34-10', '542': 'mark-34-11'
    },
};

const deliriumMap = {
    '282': 'paper-character-1',
    '283': 'paper-character-2',
    '284': 'paper-character-3',
    '285': 'paper-character-4',
    '286': 'paper-character-5',
    '287': 'paper-character-6',
    '288': 'paper-character-7',
    '289': 'paper-character-8',
    '290': 'paper-character-9',
    '291': 'paper-character-10',
    '292': 'paper-character-11',
    '293': 'paper-character-12',
    '294': 'paper-character-13',
    '295': 'paper-character-14',
    '401': 'paper-character-15',
    '425': 'paper-character-16',
    '437': 'paper-character-17',
};

const taintedDeliriumMap = {
'584': 'paper-character-18',
'585': 'paper-character-19',
'586': 'paper-character-20',
'587': 'paper-character-21',
'588': 'paper-character-22',
'589': 'paper-character-23',
'590': 'paper-character-24',
'591': 'paper-character-25',
'592': 'paper-character-26',
'593': 'paper-character-27',
'594': 'paper-character-28',
'595': 'paper-character-29',
'596': 'paper-character-30',
'597': 'paper-character-31',
'598': 'paper-character-32',
'599': 'paper-character-33',
'600': 'paper-character-34',
};

const fullMap = {
    '253': 'character-1',
    '254': 'character-2',
    '261': 'character-3',
    '263': 'character-4',
    '252': 'character-5',
    '255': 'character-6',
    '262': 'character-7',
    '259': 'character-8',
    '257': 'character-9',
    '256': 'character-10',
    '156': 'character-11',
    '260': 'character-12',
    '264': 'character-13',
    '319': 'character-14',
    '402': 'character-15',
    '426': 'character-16',
    '438': 'character-17',
};

const challengeMap = {
    '89': 'challenge-1',
    '90': 'challenge-2',
    '91': 'challenge-3',
    '92': 'challenge-4',
    '93': 'challenge-5',
    '94': 'challenge-6',
    '120': 'challenge-7',
    '96': 'challenge-8',
    '97': 'challenge-9',
    '98': 'challenge-10',
    '99': 'challenge-11',
    '100': 'challenge-12',
    '60': 'challenge-13',
    '63': 'challenge-14',
    '101': 'challenge-15',
    '102': 'challenge-16',
    '103': 'challenge-17',
    '104': 'challenge-18',
    '62': 'challenge-19',
    '95': 'challenge-20',
    '224': 'challenge-21',
    '225': 'challenge-22',
    '226': 'challenge-23',
    '227': 'challenge-24',
    '228': 'challenge-25',
    '229': 'challenge-26',
    '230': 'challenge-27',
    '231': 'challenge-28',
    '232': 'challenge-29',
    '233': 'challenge-30',
    '331': 'challenge-31',
    '332': 'challenge-32',
    '333': 'challenge-33',
    '334': 'challenge-34',
    '335': 'challenge-35',
    '517': 'challenge-36',
    '518': 'challenge-37',
    '519': 'challenge-38',
    '520': 'challenge-39',
    '521': 'challenge-40',
    '522': 'challenge-41',
    '531': 'challenge-42',
    '532': 'challenge-43',
    '533': 'challenge-44',
    '538': 'challenge-45'
};

const enemyMap = {
};