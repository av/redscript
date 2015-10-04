#!/usr/bin/env node

/**
 * Simple wrapper over your-script,
 * bundled with russian subset.
 *
 * @see https://github.com/iamfrontender/your-script
 */

// Natives ----------------------------------------------
var fs = require('fs');
var path = require('path');

// Modules ----------------------------------------------
var translator = require('your-script');

// Allocations ------------------------------------------
var files = process.argv.slice(2);

var mainDir = path.dirname(process.mainModule.filename);
var redscript = new translator({
    lexemsFolder: path.join(mainDir, 'lexems')
});

var inputExt, outputExt;
var inputType, outputType;

/**
 * Abstract logger wrapper over global console.
 *
 * @param {String} logger Logger to wrap
 * @param {String[]} messages array of strings, or arguments array of strings
 * @private
 */
function _logger(logger, messages) {
    messages =['[REDSCRIPT] -'].concat(Array.prototype.slice.call(messages));
    console[logger].apply(console, messages);
}

/**
 * Plain output logger
 */
function log() {
    _logger('log', arguments);
}

/**
 * Error logger
 */
function error() {
    _logger('error', arguments);
}

/**
 * Sets the module config before source parsing.
 * Simply choses a correct extension based on input file.
 *
 * @param {String} inputFile path to input file.
 */
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

/**
 * Launches parsing process in both directions and stores received result
 */
function parse(inputFile) {
    setOptions(inputFile);

    fs.stat(inputFile, function(err, stat) {
        if (err) {
            error(err);
        } else {
            if (stat.isFile()) {
                fs.readFile(inputFile, 'utf-8', function(err, data) {
                    if (err) {
                        error(err);
                    } else {
                        fs.writeFile(inputFile.replace(inputExt, outputExt), redscript.parse(data, {
                            from: inputType,
                            to: outputType
                        }), function(err) {
                            if (err) {
                                error(err);
                            } else {
                                log(inputFile, 'done');
                            }
                        });
                    }
                });
            } else {
                error('Seems', inputFile, 'is not a file, skipping.');
            }
        }
    });
}

// Entry -----------------------------------------------
files.forEach(function(file) {
    try {
        parse(file);
    } catch(e) {
        error(e);
    }
});