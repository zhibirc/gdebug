```javascript
const
    l      = require('l'),
    // get logger instance of some kind
    logger = l.getLogger(config);


// allow only ERROR and FATAL logs and filter others
logger.setLevel(logger.ERROR);

logger.fatal('API call returns nothing!');

// disable all logs (or think about logger.off())
logger.setLevel(logger.OFF);

// logging on DEBUG level that is currently be silent
logger.info('Success loading!', () => Array.isArray(response.data) && logger.setLevel(logger.TRACE));

logger.trace('I\'m okay!', response.data);

// add handler
logger.addHandler(logger.handlers.File('/path/to/file.log'));
```
