/**
 * @module logger
 *
 * @license The MIT License (MIT)
 * @author Yaroslav Surilov <>
 */

'use strict';

const
    isValid         = require('./is.valid'),
    activeLevel     = new WeakMap(),
    getFromWeakMap  = WeakMap.prototype.get,
    setToWeakMap    = WeakMap.prototype.set;

/**
 * Create independent logger.
 *
 * @constructor
 */
class Logger {
    constructor () {
        this.cache = {};
    }

    static setLevel ( level ) {
        if ( isValid({level: level}) ) {
            setToWeakMap.call(activeLevel, this, level);
        } else {
            throw new LoggerError({message: 'attempt to set invalid level'});
        }
    }


    static getLevel () {
        return getFromWeakMap.call(activeLevel, this);
    }
}

module.exports = Logger;
