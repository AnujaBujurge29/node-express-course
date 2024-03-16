const { readFileSync, writeFileSync } = require('fs')
const path = require('path');


// const fs = require('fs')
// console.log(fs.readFileSync('../content/first.txt', 'utf8'));

const filePath = path.join(__dirname, 'temporary', 'fileA.txt');
writeFileSync(filePath, 'First Line of Code\n')
writeFileSync(filePath, 'Second Line of Code\n', { flag: 'a' })
writeFileSync(filePath, 'third Line of Code\n', { flag: 'a' })

//read file fileA

const fileAcontent = readFileSync('./temporary/fileA.txt', 'utf8')
console.log('-----------------------------------------');
console.log('First FileA UTF File');
console.log(fileAcontent);

//practice
const firstFileBinary = readFileSync('../content/first.txt', 'binary')
const firstFileUTF = readFileSync('../content/first.txt', 'utf8')
console.log('-----------------------------------------');
console.log('Binary File');
console.log(firstFileBinary);
console.log('-----------------------------------------');
console.log('UTF File');
console.log(firstFileUTF);
console.log('-----------------------------------------');
const secondFile = readFileSync('../content/second.txt', 'utf8')
console.log('Second File');
console.log(secondFile);


writeFileSync(
    '../content/results-sync.txt', `RRResult: ${firstFileUTF}, ${secondFile}.`,
    // { flag: 'a' }
    // upend the file with above command otherwise it will replace original file
)