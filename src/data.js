class Item {
  constructor(type, expName, style, ts, details, longDesc, links) {
    this.expName = expName;
    this.class = {
      gridColumn: 'span ' + style[0],
      gridRow: 'span ' + style[1],
    };
    this.techStack = ts
      ? ts.map(el => {
          return type === 'dev' ? TS[el] : BS[el];
        })
      : [];
    this.expDetails = details;
    this.links = links || [];
  }
}

const TS = [
  'React',
  'React Native',
  'Node.js',
  'MsSQL',
  'ASP.NET',
  'CSS',
  'Postgres',
  'JWT',
  'browser history API',
  'Sequelize',
  'C#',
  'SQLite',
  'Firebase',
];
const BS = ['Analysis', 'Client Reporting', 'Client Relations', 'Market Research', 'Strategy', 'International Business'];

const DEV = [
  new Item('dev', 'Ingridify', [4, 10], [0, 2, 6, 9], 'Full stack developer working on a website for sharing recipes', '', [
    { type: 'github', href: 'https://github.com/hatchways/team-ivory' },
  ]),
  new Item('dev', 'UserAuth', [4, 5], [0, 2, 6, 7, 8, 9], 'Developed a user authentication system using JWT and encryption', '', [
    {
      type: 'github',
      href: 'https://github.com/LynnWellin/finance_data_backend',
    },
  ]),
  new Item('dev', 'Note Taking App: Notty', [4, 5], [1, 2, 11, 12], 'Developed an Android app to take notes, and organize them by tags', '', [
    {
      href: 'https://play.google.com/store/apps/details?id=com.nottynative&hl=en_US',
    },
  ]),
  new Item('dev', 'JobJunxion', [4, 5], [4, 10, 3], 'Worked as a full stack developer to improve and expand the student hiring platform', '', [
    { href: 'https://app.jobjunxion.com/' },
  ]),
  new Item('dev', 'Portfolio Website', [2, 5], [0, 5, 12], 'Created a React website to demonstrate current portfolio', '', [
    {
      type: 'github',
      href: 'https://github.com/LynnWellin/portfolio_website_v2',
    },
  ]),
  new Item(
    'dev',
    'Then and Now',
    [2, 5],
    [0, 5, 12],
    'Created a React website that retrieved and presented news articles using the Guardian API',
    '',
    [{ type: 'github', href: 'https://github.com/LynnWellin/now_and_then' }, { href: 'https://thenandnow.web.app/' }]
  ),
];

const BIZ = [
  new Item('biz', 'Goldman Sachs', [4, 10], [0, 1], 'Conducted analysis of private equity data to ensure accurate client reporting'),
  new Item('biz', 'REnergyCO', [4, 5], [0, 3], 'Conducted market analysis of oil and gas industries, and compiled findings in market reports'),
  new Item(
    'biz',
    'Education',
    [8, 5],
    [4, 5],
    "Graduated on the Dean's List with a Bachelors of Business Administration. Included 1 year of exchange studies in Sweden"
  ),
  new Item('biz', 'Odd Jobs', [4, 5], [2], 'Painter, store clerk, cashier'),
];

export { BIZ, DEV };
