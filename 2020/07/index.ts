import * as fs from 'fs';
import * as path from 'path';

const INPUT_FILE = fs.readFileSync(path.join(__dirname, 'input.txt')).toString();

type BagType = string;

interface BagItem {
    type: BagType,
    count: number
}

interface BagRule {
    type: BagType,
    contains: BagItem[]
}

const bagList = INPUT_FILE.split('\n').map(x => x.split(' contain ').map(y => y.replace('.', '')));
const bagTypes = bagList.map(x => x[0].replace(' bags', ''));
const bagContains = bagList.map(x => x.slice(1, x.length)).map(x => x[0].split(', ').map(y => y.replace(' bags', '').replace(' bag', '')));

let bagRules: BagRule[] = [];

bagTypes.forEach((bag, index) => {
    let bagItems: BagItem[] = [];
    bagContains[index].forEach(bagItem => {
        if(bagItem == 'no other'){
            bagItems.push({type: 'no other', count: 0});
        } else {
            bagItems.push({type: bagItem.slice(2, bagItem.length), count: Number(bagItem[0])});
        }
    });
    bagRules.push({type: bag, contains: bagItems});
});
console.log(bagRules);
bagRules.forEach(bagRule => {
    console.log(bagRule.contains);
});