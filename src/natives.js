/**
 * Native interfaces.
 *
 * @license The MIT License (MIT)
 * @author Yaroslav Surilov <>
 */

'use strict';

var noop = function () {};


module.exports = {
    console: (function () {
        var nativeMethods  = ['log', 'info', 'warn', 'error', 'debug', 'trace', 'assert'],
            wrappedMethods = {};

        if ( window.console ) {
            nativeMethods.forEach(function ( method ) {
                if ( typeof console[method] === 'function' ) {
                    wrappedMethods['_' + method] = console[method];
                } else {
                    wrappedMethods['_' + method] = noop;
                }
            });

            return wrappedMethods;
        }

        return null;
    })()
};
