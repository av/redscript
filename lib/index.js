var esprima = require('esprima');
var fs = require('fs');
var delta;

var DEFAULTS = {
    transpilationDirection: 'js'
};

function invert(object) {
    var key;
    var dest = {};

    for (key in object) {
        dest[object[key]] = key;
    }

    return dest;
}

function merge(target, source) {
    var key;

    for (key in source) {
        target[key] = source[key];
    }
}

function replace(s, start, end, substitute) {
    return s.substring(0, start) + substitute + s.substring(end);
}

function RedScript() {
    this.lexems = require('./lexems.js');
    merge(this, DEFAULTS);
}

RedScript.prototype = {
    parse: function (string, options) {
        // Forcing UTF-16
        string = String(string);
        options = options || DEFAULTS;

        this.offset = 0;
        this.setDirection(options.transpilationDirection);

        return this.replaceTokens(string, esprima.tokenize(string, {
            range: true
        }));
    },

    replaceTokens: function(string, tokens) {
        var token;
        var i, ii;

        for (i = 0, ii = tokens.length; i < ii; i++) {
            token = tokens[i];
            if (this.isTargetToken(token)) {
                console.log('Replacing: ', token.value, ' with ', this.lexems[token.value]);
                string = replace(string, this.applyOffset(token.range[0]), this.applyOffset(token.range[1]), this.lexems[token.value]);
                this.incrementOffset(token.value);
            }
        }

        return string;
    },

    isTargetToken: function(token)  {
        return token.type === 'Keyword' && this.lexems[token.value];
    },

    applyOffset: function(position) {
        return position + this.offset;
    },

    incrementOffset: function(tokenValue) {
        this.offset += this.lexems[tokenValue].length - tokenValue.length;
    },

    setDirection: function (direction) {
        console.log(direction);
        if (direction !== this.transpileDirection) {
            console.log(this.lexems);
            this.lexems = invert(this.lexems);
        }
    }
};

module.exports = new RedScript();