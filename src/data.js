class Item {
  constructor(expName, className, ts, req, details) {
    this.expName = expName;
    this.class = className;
    this.techStack = ts || [];
    this.background = req ? require(req + "") : null;
    this.expDetails = details;
  }
}

const TS = [
  "React",
  "React Native",
  "Node.js",
  "SQL",
  "ASP.NET",
  "CSS",
  "Postgres",
  "JWT",
  "browser history API"
];
const BS = ["Analysis"];

const DEV = [
  new Item(
    "Ingridify",
    "Item1",
    [TS[0], TS[2], TS[6]],
    null,
    "Full stack developer working on a website for sharing recipes"
  ),
  new Item(
    "UserAuth",
    "Item2",
    [TS[0], TS[2], TS[3], TS[7], TS[8]],
    null,
    "Developed a user authentication system using JWT and encryption"
  ),
  new Item(
    "Note Taking App: Notty",
    "Item2",
    [TS[1], TS[2], TS[3]],
    null,
    "Developed an Android app to take notes, and organize them by tags"
  ),
  new Item(
    "JobJunxion",
    "Item2",
    [TS[4], TS[3]],
    null,
    "Worked as a full stack developer to improve and expand the student hiring platform"
  ),
  new Item(
    "Portfolio Website",
    "Item4",
    [TS[0], TS[5]],
    null,
    "Created a React website to demonstrate current portfolio"
  ),
  new Item(
    "Then and Now",
    "Item4",
    [TS[0], TS[5]],
    null,
    "Created a React website that retrieved and presented news articles using the Guardian API"
  )
];
const BIZ = [
  new Item("Goldman Sachs", "Item1", [BS[0]]),
  new Item("REnergyCO", "Item3", [BS[0]]),
  new Item("Education", "Item2")
];

export { BIZ, DEV };
