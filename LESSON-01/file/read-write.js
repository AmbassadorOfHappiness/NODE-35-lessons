const fs = require('fs/promises');
const fileName = '../base/main.cjs';

const movedFile =async (fileName) => {
    const file = await fs.readFile(fileName, 'utf-8');
    await fs.mkdir('./temp', {recursive: true});
    await fs.writeFile('./temp/temp.js', `${file}console.log("HELLO")`);
};
movedFile(fileName).then(() => console.log('DONE'));