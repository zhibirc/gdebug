/**
 * Get version.
 *
 * @license The MIT License (MIT)
 * @author Yaroslav Surilov <>
 */

'use strict';

const config = require('../package');


module.exports = `${config.name} v.${config.version}`;
