/**
 * Logger.
 */

var config = require('./config'),
    _log         = console.log,
    _assert      = console.assert;


/**
 * Construct logger instance.
 *
 * @param {Object} [config] - configuration options
 *
 * @constructor
 */
function Logger ( config ) {
    this.cache = {};
    this.style = config.style || defaultStyle;
}


/**
 * Basic log worker.
 */
Logger.prototype.log = function ( data ) {
    _log(this.style, data);
};


module.exports = Logger;


/*
var debug = require('debug')('app'),
    log   = console.log.bind(console),
    warn  = console.warn.bind(console),
    err   = console.error.bind(console);

function isPrimitive ( value ) {
    return value !== function () { return this; }.call(value);
}

module.exports = function ( value ) {
    var util, tmp;

    if ( isPrimitive(value) ) {
        log(value);
        debug(value);
    } else {
        util = require('util');
        tmp  = util.inspect(value, false, 1)

        log(tmp);
        debug(tmp);
    }
};
*/
