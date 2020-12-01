import * as fs from 'fs';
import * as path from 'path';

let input: string = "";

fs.readFile(path.join(__dirname, 'input.txt'), (error, data) => {
    input = data.toString();

    let entries: any[] = input.split('\n');
    entries = entries.map(x => {
        return Number(x);
    });

    let solution = 0;
    entries.forEach((entry, index) => {
        entries.forEach((subEntry, subIndex) => {
            if(entry + subEntry == 2020){
                console.log(`${entry} + ${subEntry} = 2020: ${entry + subEntry == 2020}`);
                solution = entry * subEntry;
            }
        });
    });
    console.log(`Part 1 Solution: ${solution}`);

    solution = 0;
    entries.forEach((entry, index) => {
        entries.forEach((subEntry, subIndex) => {
            entries.forEach((subSubEntry, subSubIndex) => {
                if(entry + subEntry + subSubEntry == 2020){
                    console.log(`${entry} + ${subEntry} + ${subSubEntry} = 2020: ${entry + subEntry + subSubEntry == 2020}`);
                    solution = entry * subEntry * subSubEntry;
                }
            });
        });
    });
    console.log(`Part 2 Solution: ${solution}`);
});

