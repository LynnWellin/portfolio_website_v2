class Item {
	constructor(expName, className, ts, req) {
		console.log(req);
		this.expName = expName;
		this.class = className;
		this.techStack = ts || [];
		this.background = req ? require(req + '') : null;
	}
}

const TS = ['React', 'React Native', 'Node.js', 'SQL', 'ASP.NET', 'CSS'];
const BS = ['Analysis'];

const DEV = [
	new Item(
		'Note Taking App: Notty',
		'Item1',
		[TS[1], TS[2], TS[3]],
		'./Images/notes.jpg'
	),
	new Item('JobJunxion', 'Item2', [TS[4], TS[3]]),
	new Item('Portfolio Website', 'Item3', [TS[0], TS[5]]),
	new Item('Then and Now', 'Item4'),
];
const BIZ = [
	new Item('Goldman Sachs', 'Item1', [BS[0]]),
	new Item('REnergyCO', 'Item3', [BS[0]]),
	new Item('Education', 'Item2'),
];

export { BIZ, DEV };
