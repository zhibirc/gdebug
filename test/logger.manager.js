/**
 * Tests for Logger Manager.
 *
 * @license The MIT License (MIT)
 * @author Yaroslav Surilov <>
 */

'use strict';

const
    chai   = require('chai'),
    assert = chai.assert;


chai.config.includeStack = true;

describe('Logger Manager', () => {
    const loggerManager = require('../src/core/logger.manager');

    describe('General', () => {
        it('add Logger Manager to the scope', () => {
            assert.isObject(loggerManager, 'Logger Manager is an object');
        });

        it('Logger Manager is singleton', () => {
            assert.strictEqual(loggerManager, require('../src/core/logger.manager'));
        });
    });

    describe('Public API', () => {
        it('check if `setLogger` method exists', () => {
            assert.isFunction(loggerManager.setLogger, '`setLogger` exists and is a function');
        });

        it('check if `unsetLogger` method exists', () => {
            assert.isFunction(loggerManager.unsetLogger, '`unsetLogger` exists and is a function');
        });

        it('check if `setGlobalLevel` method exists', () => {
            assert.isFunction(loggerManager.setGlobalLevel, '`setGlobalLevel` exists and is a function');
        });
    });

    describe('API details', () => {
        it('check `setLogger` parameters amount', () => {
            assert.equal(loggerManager.setLogger.length, 0);
        });

        it('check `unsetLogger` parameters amount', () => {
            assert.equal(loggerManager.unsetLogger.length, 1);
        });

        it('check `setGlobalLevel` parameters amount', () => {
            assert.equal(loggerManager.setGlobalLevel.length, 1);
        });
    });
});
