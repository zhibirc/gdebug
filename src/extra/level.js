/**
 *
 * @module log.level
 *
 * @license The MIT License (MIT)
 * @author Yaroslav Surilov <>
 */

'use strict';

const
    types     = require('./types'),
    typeCheck = require('./utils/type.check');


/**
 * @constructor
 */
class Level {
    constructor ( config ) {
        if ( typeCheck.isPlainObject(config) ) {
            try {
                config = require('./parse.level.config')(config);

                this.name     = config.name;
                this.prefix   = config.prefix;
                this.body     = config.body;
                this.callback = config.callback;
                this.style    = config.style;
            } catch ( error ) {
                throw new LevelError({message: error.message});
            }
        } else {
            throw new LevelError({message: 'config to constructor must be a plain object'});
        }
    }
}

module.exports = Level;
