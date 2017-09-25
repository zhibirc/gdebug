/**
 * Logger.
 */

'use strict';


/**
 *
 */
function log ( obj ) {
    const util = require('util');

    console.log(util.inspect(obj, false, 1));
}


module.exports = log;
