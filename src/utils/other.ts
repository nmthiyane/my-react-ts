/**
 * Checks to see if the value is null or udefined
 *
 * @export
 * @param {*} value Value to check
 * @returns {boolean} true if it's null or udefined else false
 */
export function isNullOrUndefined<T>(value: T | null | undefined): value is null | undefined {
	return value === null || isUndefined(value);
}

/**
 * Will validate the passed parameter against isNullOrUndefined, isObjectAndEmpty, isArrayAndEmpty, isStringAndEmpty
 *
 * @export
 * @param {(any[] | undefined)} collection
 * @returns {boolean}
 */
export function isNullOrEmpty(parameter: any[]): boolean {
	return isNullOrUndefined(parameter) || isStringAndEmpty(parameter) || isArrayAndEmpty(parameter) || isObjectAndEmpty(parameter);
}

/**
 * Checks if a value is undefined
 *
 * @export
 * @template T
 * @param {(T | undefined)} value
 * @returns {value is undefined}
 */
export function isUndefined<T>(value: T | undefined): value is undefined {
	return value === void 0;
}

/**
 * Checks if a string is null or whitespace.
 *
 * @export
 * @param {string} value to check if the value is null or whitespace
 * @returns {boolean} true if it's null, undefined, empty or whitespace else false
 */
export function isNullOrWhitespace(value: string): boolean {
	return (value || '').trim() === '';
}

/**
 * Validates if the parameter is of type string and if it is null or whitespace
 *
 * @export
 * @param {any} value
 * @returns {boolean}
 */
export function isStringAndEmpty(value: any): boolean {
	return typeof value === 'string' && isNullOrWhitespace(value);
}

/**
 * Will validate if the parameter is of type array and if it is empty
 *
 * @export
 * @param {any} array
 * @returns {boolean}
 */
export function isArrayAndEmpty(arr: any): boolean {
	return !isNullOrUndefined(arr) && Array.isArray(arr) && arr.length === 0;
}

/**
 * Will return a boolean indicating wether the passed variable is an object
 *
 * @export
 * @param {any} obj
 * @returns {boolean}
 */
export function isObject(obj: any): boolean {
	return (typeof obj === 'object' && !Array.isArray(obj));
}

/**
 * Will validate if the passed parameter is of type object and has no properties defined
 *
 * @param {{}} obj
 * @returns {boolean}
 */
export function isObjectAndEmpty(obj: {}): boolean {
	if (!isObject(obj)) {
		return false;
	}

	for (let prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			return false;
		}
	}

	return JSON.stringify(obj) === JSON.stringify({});
}

/**
 * Does a deepcopy of a multi level object
 * Object.assign does not copy items that are lower than the root level
 * those items will be copied by reference
 *
 * @export
 * @template T
 * @param {(T | undefined)} [value]
 * @returns {(T | null)}
 */
export function deepCopy<T>(value?: T | undefined): T | null {
	if (!isUndefined(value)) {
		let response = JSON.parse(JSON.stringify(value));
		return response;
	}
	return null;
}