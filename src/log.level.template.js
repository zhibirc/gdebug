/**
 * @module log.level.template
 *
 * @license The MIT License (MIT)
 * @author Yaroslav Surilov <>
 */

'use strict';

const types = require('./types');

module.exports = {
    name: {
        type:     [types.STRING],
        value:    null,
        critical: true
    },
    prefix: {
        type:     [types.STRING],
        value:    '%t',
        critical: false
    },
    body: {
        type:     [types.NUMBER, types.STRING, types.FUNCTION],
        value:    null,
        critical: true
    },
    callback: {
        type:     [types.FUNCTION],
        value:    null,
        critical: false
    },
    style: {
        type: [types.STRING],
        value:    null,
        critical: false
    }
};
