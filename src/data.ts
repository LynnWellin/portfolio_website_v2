export interface Link {
    type?: string;
    href: string;
}

export class ItemData {
    // Types
    expName: string;
    techStack: string[];
    class: { gridColumn: string; gridRow: string };
    links: Link[];
    expDetails: string;
    expTag: string | null;

    constructor(
        expName: string,
        style: number[],
        ts: string[],
        details: string,
        links?: { type?: string; href: string }[],
        expTag?: string
    ) {
        this.expName = expName;
        this.class = {
            gridColumn: 'span ' + style[0],
            gridRow: 'span ' + style[1],
        };
        this.techStack = ts ?? [];
        this.expDetails = details;
        this.links = links ?? [];
        this.expTag = expTag ?? null;
    }
}

const SK_REACT = 'React';
const SK_REACT_NT = 'React Native';
const SK_NODE = 'Node.js';
const SK_MS_SQL = 'MsSQL';
const SK_ASP = 'ASP.NET';
const SK_CSS = 'CSS';
const SK_POST = 'Postgres';
const SK_JWT = 'JWT';
const SK_SEQUEL = 'Sequelize';
const SK_CSHARP = 'C#';
const SK_SQLITE = 'SQLite';
const SK_FIREBASE = 'Firebase';
const SK_REDUX = 'Redux';
const SK_AWS = 'AWS';
const SK_EC2 = 'EC2';
const SK_RDS = 'RDS';
const SK_WEBSOCKET = 'Websockets';
const SK_TS = 'Typescript';

const SK_ANALYSIS = 'Analysis';
const SK_REPORTING = 'Client Reporting';
const SK_RESEARCH = 'Market Research';
const SK_STRAT = 'Strategy';
const SK_INT_BIZ = 'International Business';

export const DEV = [
    new ItemData(
        'Varicent',
        [4, 10],
        [SK_REACT, SK_TS, SK_REDUX, SK_CSHARP],
        'Full stack developer working on creating new features'
    ),
    new ItemData(
        'Ledger A',
        [4, 5],
        [
            SK_REACT,
            SK_REDUX,
            SK_NODE,
            SK_FIREBASE,
            SK_AWS,
            SK_POST,
            SK_JWT,
            SK_SEQUEL,
            SK_EC2,
            SK_RDS,
        ],
        'A website to track personal expenses, developed with React, NodeJS, Redux, Postgress; launched on AWS (EC2, RDS)',
        [{ type: 'github', href: 'https://github.com/lebedevy/ledger_a' }],
        'Project'
    ),
    new ItemData(
        'Chess App',
        [4, 5],
        [SK_REACT, SK_TS, SK_REDUX, SK_WEBSOCKET, SK_NODE, SK_POST, SK_SEQUEL],
        'Created an online chess app utilizing websockets that allowed live match updates',
        [],
        'Project'
    ),
    new ItemData(
        'Note Taking App',
        [4, 5],
        [SK_REACT_NT, SK_NODE, SK_SQLITE, SK_FIREBASE],
        'Developed an Android app to take notes, and organize them by tags',
        [
            {
                href: 'https://play.google.com/store/apps/details?id=com.nottynative&hl=en_US',
            },
        ],
        'Project'
    ),
    new ItemData(
        'JobJunxion',
        [2, 5],
        [SK_ASP, SK_CSHARP, SK_MS_SQL],
        'Worked as a full stack developer to improve and expand the student hiring platform',
        [{ href: 'https://app.jobjunxion.com/' }]
    ),
    new ItemData(
        'Portfolio Website',
        [2, 5],
        [SK_REACT, SK_TS, SK_CSS, SK_FIREBASE],
        'Created a React website to demonstrate current portfolio',
        [
            {
                type: 'github',
                href: 'https://github.com/lebedevy/portfolio_website_v2',
            },
        ],
        'Project'
    ),
];

export const BIZ = [
    new ItemData(
        'Goldman Sachs',
        [5, 10],
        [SK_ANALYSIS, SK_REPORTING],
        'Conducted analysis of private equity data to ensure accurate client reporting'
    ),
    new ItemData(
        'REnergyCO',
        [5, 5],
        [SK_ANALYSIS, SK_RESEARCH],
        'Conducted market analysis of oil and gas industries, and compiled findings in market reports'
    ),
    new ItemData(
        'Education',
        [9, 5],
        [SK_STRAT, SK_RESEARCH, SK_INT_BIZ],
        "Graduated on the Dean's List with a Bachelors of Business Administration. Included 1 year of exchange studies in Sweden"
    ),
    new ItemData('Odd Jobs', [4, 5], [SK_REPORTING], 'Painter, store clerk, cashier'),
];

export interface IPorfileLink {
    type: string;
    link: string;
    image: any;
}

// profile links
export const LINKS: IPorfileLink[] = [
    {
        type: 'LinkedIn',
        link: 'https://www.linkedin.com/in/yuryl/',
        image: require('./Images/LI-Logo.png'),
    },
    {
        type: 'LeetCode',
        link: 'https://leetcode.com/lynnwellin/',
        image: require('./Images/LeetCode_nav.4d940ca72.png'),
    },
];
