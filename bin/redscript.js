#!/usr/bin/env node

var fs = require('fs');
var translator = require('your-script');
var args = process.argv.slice(2)
var inputFile = args[0];
var redscript = new translator({
    lexemsFolder: './lexems'
});

var inputExt, outputExt;
var inputType, outputType;

function setOptions(inputFile) {
    inputExt = path.extname(inputFile).substr(1);
    inputFile = fs.readFileSync(inputFile);

    if (inputExt === 'js') {
        inputType = 'javascript';
        outputType = 'redscript';
        outputExt = 'rs';
    } else if (inputExt === 'rs') {
        inputType = 'redscript';
        outputType = 'javascript';
        outputExt = 'js';
    }

    var parsedSource = redscript.parse(inputFile, {
        sourceSubset: inputType,
        destinationSubset: outputType
    });

    fs.writeFileSync(inputFile.replace(inputExt, outputExt), parsedSource);
}