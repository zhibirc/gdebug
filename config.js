/**
 * Global application configuration.
 * Can store run-time options, API urls, paths, execution flags and so on.
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
