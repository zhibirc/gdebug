/**
 * ESLint configuration.
 *
 * @license The MIT License (MIT)
 * @author Yaroslav Surilov <>
 */

'use strict';

module.exports = {
    // base rules
    extends: require.resolve('cjs-eslint'),
    env: {
        mocha: true
    }
};
