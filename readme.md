[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](license.md)
[![Maintenance](https://img.shields.io/maintenance/yes/2019.svg?style=flat-square)]()

### Functionality


### Built-in Log Levels

The built-in log levels have a set of convenience methods on the Logger interface that makes them easier to use.

Level | Description
------|------------
ALL   | All levels including custom levels.
TRACE | Designates finer-grained informational events than the DEBUG.
DEBUG | Designates fine-grained informational events that are most useful to debug an application.
INFO  | Designates informational messages that highlight the progress of the application at coarse-grained level.
WARN  | Designates potentially harmful situations.
ERROR | Designates error events that might still allow the application to continue running.
FATAL | Designates very severe error events that will presumably lead the application to abort.
OFF   | The highest possible rank and is intended to turn off logging.


### How do Levels Works?
    
A log request of level **X** in a logger with level **Y** is enabled if `X >= Y`. It assumes that levels are ordered. 
For the standard levels, we have `ALL < TRACE < DEBUG < INFO < WARN < ERROR < FATAL < OFF`.

 
### Adding Custom Log Levels

**L** supports custom log levels. Custom log levels can be defined in code. To define a custom log level in code, use the `<Logger_instance>.defineLevel(config)` method. 
This method creates a new level for the specified logger with particular properties (e.g. `name`). After a log level is defined you can log messages at this level. 


### Replacing Log Levels

If it were possible to hide existing log levels, users could customize the Logger interface to match their requirements. 
Some people may not want to have a FATAL or a TRACE level, for example. They would like to be able to create a custom Logger that only has debug(), info(), warn() and error() methods.
