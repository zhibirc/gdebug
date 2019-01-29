/**
 * Core resource types.
 *
 * @module types
 *
 * @license The MIT License (MIT)
 * @author Yaroslav Surilov <>
 */

'use strict';

module.exports = {
    levels: {
        ALL: {
            name: 'all',
            authority: 100
        },
        TRACE: {
            name: 'trace',
            authority: 200
        },
        DEBUG: {
            name: 'debug',
            authority: 300
        },
        INFO: {
            name: 'info',
            authority: 400
        },
        WARN: {
            name: 'warn',
            authority: 500
        },
        ERROR: {
            name: 'error',
            authority: 600
        },
        FATAL: {
            name: 'fatal',
            authority: 700
        },
        OFF: {
            name: 'off',
            authority: 800
        },
    },
    NUMBER:   1,
    STRING:   2,
    FUNCTION: 3
};
