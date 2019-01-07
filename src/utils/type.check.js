// TODO: not reinventing the wheel and research the existed type-checkers.

/**
 * Get the object type string.
 *
 * @param {*} value
 *
 * @return {string}
 */
function getObjectType ( value ) {
    return Object.prototype.toString.call(value)
}


/**
 * Check to see if a value is an object.
 *
 * @param {*} value
 *
 * @return {boolean}
 */
function isObject(value) {
    // null is object, hence the extra check
    return value !== null && typeof value === 'object'
}


/**
 * Check to see if a value is an object and only an object.
 *
 * @param {*} value
 *
 * @return {boolean}
 */
function isPlainObject ( value ) {
    // eslint-disable-next-line
    return isObject(value) && value.__proto__ === Object.prototype;
}


/**
 * Check to see if a value is an array.
 *
 * @param {*} value
 *
 * @return {boolean}
 */
function isArray ( value ) {
    return (
        (typeof Array.isArray === 'function' && Array.isArray(value)) ||
        getObjectType(value) === '[object Array]'
    );
}


/**
 * Check to see if a value is a primitive value.
 *
 * @param {*} value
 *
 * @return {boolean}
 */
function isPrimitive ( value ) {
    return value !== function () { return this; }.call(value);
}


module.exports = {
    isPrimitive:   isPrimitive,
    isArray:       isArray,
    isObject:      isObject,
    isPlainObject: isPlainObject
};
