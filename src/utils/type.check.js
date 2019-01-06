// TODO: not reinventing the wheel and research the existed type-checkers.

var toString = Object.prototype.toString;

module.exports = {
    isPrimitive: function ( value ) {
        return value !== function () { return this; }.call(value);
    },
    isArray: Array.isArray,
    isObject: function ( value ) {
        return Object.prototype.toString.call(value).slice(8, -1).toLowerCase() === typeof null;
    }
};
