/**
 * @module logger.manager
 *
 * @license The MIT License (MIT)
 * @author Yaroslav Surilov <>
 */

'use strict';

const
    Logger        = require('./logger'),
    types         = require('../configs/types'),
    loggerManager = {},
    loggers       = [],
    activeLoggers = new WeakMap();


// TODO: work on it -- check if getter fires when invoking inner properties
Object.defineProperty(loggerManager, 'levels', {
    value: {}
});

Object.keys(types.levels).forEach(level => {
    Object.defineProperty(loggerManager.levels, level, {
        get: () => types.levels[level].authority
    });
});


/**
 * Create new logger.
 *
 * @param {Object} [config] - optional logger setup
 *
 * @return {Logger} created logger
 */
loggerManager.setLogger = ( config = {} ) => {
    const logger = new Logger(config);

    loggers.push(logger);
    activeLoggers.set(logger, {
        creationTime: new Date()
    });

    return logger;
};


/**
 * Remove existing logger.
 *
 * @param {Logger} logger - logger instance to remove
 */
loggerManager.unsetLogger = logger => {
    if ( activeLoggers.has(logger) ) {
        activeLoggers.delete(logger);
        loggers.splice(loggers.indexOf(logger), 1);

        // to prevent unexpected memory leaks
        logger.removeAllHandlers();
        logger.removeAllFilters();

        logger = null;
    } else {
        throw new LoggerManagerError({message: 'invalid logger to remove'});
    }
};


/**
 * Set logging level for all existed loggers.
 *
 * @param {number} level - logging level to set
 *
 * @example
 * logManager.setLevel(logger.ERROR); // TODO: add uniform point for getting log levels
 */
loggerManager.setGlobalLevel = level => {
    loggers.forEach(logger => logger.setLevel(level));
};


module.exports = loggerManager;
