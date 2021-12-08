import * as fs from 'fs';
import * as path from 'path';

const INPUT_FILE = fs.readFileSync(path.join(__dirname, 'input.txt')).toString();

const findSolutionOne = (input: string[]): number => {
    const REQUIRED_FIELDS = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

    return input.filter(passport => REQUIRED_FIELDS.every(field => passport.includes(field))).length;
}

const findSolutionTwo = (input: string[]): number => {
    const VALIDATION_FUNCTIONS: any = {
        byr: (byr: string): boolean => byr.length == 4 && Number(byr) >= 1920 && Number(byr) <= 2002,
        iyr: (iyr: string): boolean => iyr.length == 4 && Number(iyr) >= 2010 && Number(iyr) <= 2020,
        eyr: (eyr: string): boolean => eyr.length == 4 && Number(eyr) >= 2020 && Number(eyr) <= 2030,
        hgt: (hgt: string): boolean => (hgt.endsWith('cm') ? (Number(hgt.replace('cm', '')) >= 150 && Number(hgt.replace('cm', '')) <= 193) : hgt.endsWith('in') ? (Number(hgt.replace('in', '')) >= 59 && Number(hgt.replace('in', '')) <= 76) : false),
        hcl: (hcl: string): boolean => /^#([a-f0-9]{6})$/.test(hcl),
        ecl: (ecl: string): boolean => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].some(color => ecl == color),
        pid: (pid: string): boolean => /^([0-9]{9})$/.test(pid),
        cid: (cid: string): boolean => true
    }

    const REQUIRED_FIELDS = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

    const rawPassports = input.map(x => x.split(' ')).map(x => x.map(y => y.split(':')));

    let passports: any[] = [];
    rawPassports.forEach(passport => {
        let pairs: any = {};
        passport.forEach(pair => {
            pairs[pair[0]] = pair[1];
        });
        passports.push(pairs);
    });

    return passports.filter(passport => REQUIRED_FIELDS.every(field => field in passport) && REQUIRED_FIELDS.every(field => VALIDATION_FUNCTIONS[field](passport[field]))).length;
}

const passports = INPUT_FILE.split('\r\n\r\n').map(x => x.split('\r').join('').split('\n').join(' '));

console.log(`Solution 1: ${findSolutionOne(passports)}`);
console.log(`Solution 2: ${findSolutionTwo(passports)}`);