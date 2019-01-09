/**
 * Logger core.
 *
 * @license The MIT License (MIT)
 * @author Yaroslav Surilov <>
 */

'use strict';

var appConfig = require('./config'),
    natives   = require('./natives');


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
