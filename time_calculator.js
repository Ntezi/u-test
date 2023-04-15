const fs = require('fs')
const readline = require('readline')

function getTimePassed(records) {
	const employeeRecords = records.reduce((acc, curr) => {
		if (!acc[curr.id]) {
			acc[curr.id] = [];
		}
		acc[curr.id].push(curr);
		return acc;
	}, {});

	const employeeTimes = {};

	for (let id in employeeRecords) {
		const records = employeeRecords[id];
		let totalTime = 0;
		for (let i = 0; i < records.length; i += 2) {
			const entryTimeParts = records[i].time.split(':');
			const exitTimeParts = records[i + 1].time.split(':');
			const entryTime = new Date().setHours(entryTimeParts[0], entryTimeParts[1], 0);
			const exitTime = new Date().setHours(exitTimeParts[0], exitTimeParts[1], 0);
			const timeDiff = exitTime - entryTime;
			totalTime += timeDiff;
		}
		employeeTimes[id] = totalTime / 1000 / 60 / 60;
	}

	console.log(employeeTimes);
}




const file = 'text.txt'
const records = [];
const rl = readline.createInterface({
	input: fs.createReadStream(file),
	output: process.stdout,
	terminal: false
});

rl.on('line', (line) => {
	line.split('\n').map(employeeRecord => {
		const record = employeeRecord.split(' ')
		records.push({
			id: record[0],
			time: `${record[1]}:${record[2]}`
		})
	})
});
rl.on('close', async () => {
	getTimePassed(records)
});
