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
    logManager = {
        levels: {}
    };

Object.keys(types.levels).forEach(level => {
    logManager.levels[level] = types.levels[level].authority;
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

};


module.exports = logManager;
