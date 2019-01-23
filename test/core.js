/**
 * Testing logger's core functionality.
 *
 * @license The MIT License (MIT)
 * @author Yaroslav Surilov <>
 */

'use strict';

const
    chai   = require('chai'),
    assert = chai.assert;


chai.config.includeStack = true;

describe('core functionality', function () {
    describe('Logger Manager', function () {
        const loggerManager = require('../src/core/logger.manager');

        it('add Logger Manager to the scope', function () {
            assert.isObject(loggerManager, 'Logger Manager is an object');
        });

        it('check if `getLogger` method exists', function () {
            assert.isFunction(loggerManager.getLogger, '`getLogger` exists and is a function');
        });

        it('check if `setGlobalLevel` method exists', function () {
            assert.isFunction(loggerManager.setGlobalLevel, '`setGlobalLevel` exists and is a function');
        });

        it('check `setGlobalLevel` parameters amount', function () {
            assert.equal(loggerManager.setGlobalLevel.length, 1);
        });
    });

    describe('Logger', function () {
        it('Get Logger instance for work', function () {
            const
                loggerManager = require('../src/core/logger.manager'),
                Logger        = require('../src/core/logger');

            assert.instanceOf(loggerManager.getLogger(), Logger, '`getLogger` returns Logger instance');
        });


    });
});


// TODO: cover these basic use cases with detailed tests
/*
// allow only ERROR and FATAL logs and filter others
logger.setLevel(logger.ERROR);

logger.fatal('API call returns nothing!');

// disable all logs (or think about logger.off())
logger.setLevel(logger.OFF);

// logging on DEBUG level that is currently be silent
logger.info('Success loading!', () => Array.isArray(response.data) && logger.setLevel(logger.TRACE));

logger.trace('I\'m okay!', response.data);

// add handler
logger.addHandler(logger.handlers.File('/path/to/file.log'));*/
