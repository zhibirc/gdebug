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
 * Basic log worker.
 */
Logger.prototype.log = function ( data ) {
    _log(this.style, data);
};


module.exports = Logger;
