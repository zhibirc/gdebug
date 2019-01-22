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
    logManager = {},
    loggers    = {};


// TODO: work on it -- check if getter fires when invoking inner properties
Object.defineProperty(logManager, 'levels', {
    value: {}
});

Object.keys(types.levels).forEach(level => {
    Object.defineProperty(logManager.levels, level, {
        get: () => types.levels[level].authority
    });
});


/**
 * Create new logger.
 *
 * @return {Logger} created logger
 */
logManager.getLogger = () => {
    const logger = new Logger();

    // some actions

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
logManager.setGlobalLevel = level => {
    loggers.forEach(logger => logger.setLevel(level));
};


module.exports = logManager;
