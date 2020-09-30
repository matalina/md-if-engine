const parser = require('../src/parser.js').default;
const fs = require('fs');

fs.readFile(`${__dirname}/test-file.md`,'utf8', (err,data) => {
    if (err) {
        return console.log(err);
    }
    console.log(parser.render(data));
});