/**
 * Global application configuration.
 * Can store run-time options, API urls, paths, execution flags and so on.
 *
 * @module config
 *
 * @license The MIT License (MIT)
 * @author Yaroslav Surilov <>
 */

'use strict';

module.exports = {
    state: {
        useDevTools:  true,
        useLocalFile: false,
        useNetwork:   false
    },
    output: {
        devTools:  {
            styles: {
                error:    '',
                info:     '',
                success:  '',
                progress: '',
                event:    ''
            }
        },
        network:   {},
        localFile: {}
    }
};
