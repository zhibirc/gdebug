/**
 * @module logger
 *
 * @license The MIT License (MIT)
 * @author Yaroslav Surilov <>
 */

'use strict';

const isValid = require('./is.valid');

let activeLevel = null;

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
            activeLevel = level;
        } else {
            throw new LoggerError({message: 'attempt to set invalid level'});
        }
    }


    static getLevel () {
        return activeLevel;
    }
}

module.exports = Logger;
