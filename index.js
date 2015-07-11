var lexems = require('./lexems.js');
var iteratee = [];
var tokens = {};

function invert(object) {
    var key;
    var dest = {};

    for (key in object) {
        dest[object[key]] = key;
    }

    return dest;
}

(function() {
    var lexem;

    if (process.argv[2] === '-b' || process.argv[2] === '-backwards') {
        lexems = invert(lexems);
    }

    for (lexem in lexems) {
        tokens[lexem] = new RegExp(lexem, 'g');
        iteratee.push(lexem);
    }
})();

function redscript(source) {
    var i, ii;

    for (i = 0, ii = iteratee.length; i < ii; i++) {
        source = source.replace(tokens[iteratee[i]], lexems[iteratee[i]]);
    }

    return source;
}

module.exports = redscript;