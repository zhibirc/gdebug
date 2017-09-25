/**
 * Logger.
 */

'use strict';

var debug = require('debug')('app');


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
function log ( value ) {
    var util;

    if ( isPrimitive(value) ) {
        debug(value);
    } else {
        util = require('util');
        debug(util.inspect(value, false, 1));
    }
}


module.exports = log;
