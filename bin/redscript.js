#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var translator = require('your-script');
var args = process.argv.slice(2);
var inputFile = args[0];

var mainDir = path.dirname(process.mainModule.filename);
var redscript = new translator({
    lexemsFolder: path.join(mainDir, 'lexems')
});

var inputExt, outputExt;
var inputType, outputType;
var inputSource, outputSource;

function setOptions(inputFile) {
    inputExt = path.extname(inputFile).substr(1);
    
    if (inputExt === 'js') {
        inputType = 'javascript';
        outputType = 'redscript';
        outputExt = 'rs';
    } else if (inputExt === 'rs') {
        inputType = 'redscript';
        outputType = 'javascript';
        outputExt = 'js';
    }
}

function parse() {
    setOptions(inputFile);

    inputSource = fs.readFileSync(inputFile);
    outputSource = redscript.parse(inputSource, {
        sourceSubset: inputType,
        destinationSubset: outputType
    });

    fs.writeFileSync(inputFile.replace(inputExt, outputExt), outputSource);
}

parse();