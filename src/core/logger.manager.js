/**
 * @module logger.manager
 *
 * @license The MIT License (MIT)
 * @author Yaroslav Surilov <>
 */

'use strict';

const
    Logger     = require('./logger'),
    types      = require('../configs/types'),
    logManager = {};


/**
 * Create new logger.
 *
 * @return {Logger} created logger
 */
logManager.getLogger = () => {
    const logger = new Logger();

    return logger;
};


/**
 * Set logging level for all existed loggers.
 *
 * @param {number} level - logging level to set
 *
 * @example
 * logManager.setLevel(logger.ERROR); // TODO: add uniform point for getting log levels
 */
logManager.setLevel = level => {

};


module.exports = logManager;
