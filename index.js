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
