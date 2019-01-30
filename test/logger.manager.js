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
