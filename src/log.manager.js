/**
 * @module log.manager
 *
 * @license The MIT License (MIT)
 * @author Yaroslav Surilov <>
 */

'use strict';

const
    Logger = require('./logger'),
    logManager = {};


logManager.getLogger = () => new Logger();


module.exports = logManager;
