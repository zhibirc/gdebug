/**
 * @module logger
 *
 * @license The MIT License (MIT)
 * @author Yaroslav Surilov <>
 */

'use strict';

const
    types   = require('../configs/types'),
    isValid = require('../utils/is.valid');
    // TODO: think about is this needed?!
    /*activeLevel     = new WeakMap(),
    getFromWeakMap  = WeakMap.prototype.get,
    setToWeakMap    = WeakMap.prototype.set;*/

/**
 * Create independent logger.
 *
 * @constructor
 */
class Logger {
    constructor () {
        this.cache = {};
        // TODO: discuss on this -- which level must be DEFAULT level?
        this.level = types.level.DEBUG;
    }

    setLevel ( level ) {
        if ( isValid({level: level}) ) {
            //setToWeakMap.call(activeLevel, this, level);
            this.level = level;
        } else {
            throw new LoggerError({message: 'attempt to set invalid level'});
        }
    }


    getLevel () {
        //return getFromWeakMap.call(activeLevel, this);
        return this.level;
    }


    addHandler ( handler ) {}


    removeHandler ( handler ) {}


    removeAllHandlers () {}


    addFilter ( filter ) {}


    removeFilter ( filter ) {}


    removeAllFilters () {}
}

module.exports = Logger;
