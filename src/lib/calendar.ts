// import fs from 'fs';
// import path from 'path';

interface Year {
	year: number;
	days: number[];
}

export function getCalendar(): Year[] {
	let years: Year[] = [];

	// const yearFolders = fs.readdirSync(path.join(__dirname, '../solutions'));

	// yearFolders.forEach(folder => {
	// 	if (folder !== 'utils') {
	// 		years.push({
	// 			year: parseInt(folder),
	// 			days: fs
	// 				.readdirSync(path.join(__dirname, '../solutions', folder))
	// 				.map(x => parseInt(x)),
	// 		});
	// 	}
	// });

	return years;
}
