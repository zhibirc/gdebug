'use strict';

const types = require('./types');

class Level {
    constructor ( config ) {
        if ( isPlainObject(config) ) {
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
