'use strict';

const Logger = require('./logger'),
    logManager = {};


logManager.getLogger = () => new Logger();


module.exports = logManager;
