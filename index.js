/**
 * Logger.
 */

'use strict';

var debug = require('debug')('app'),
    log   = console.log.bind(console),
    warn  = console.warn.bind(console),
    err   = console.error.bind(console);


/**
 *
 * @param value
 * @return {boolean}
 */
function isPrimitive ( value ) {
    return value !== function () { return this; }.call(value);
}


/**
 *
 * @param {*} value value for logging
 */
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
