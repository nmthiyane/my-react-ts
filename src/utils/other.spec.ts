/*
 Author: Ntuthuko Mthiyane
 Date: 06/03/2018
 Description: This test is responsible for testing functions in other.js
*/

import { isNullOrUndefined, isNullOrEmpty, isUndefined, isNullOrWhitespace, isStringAndEmpty, 
isArrayAndEmpty, isObject, isObjectAndEmpty, deepCopy } from './other';

describe('It test isNullOrUndefined', () => {
	let array: any[];
	let expected: Boolean;

	it('it checks if the value is null', () => {
		expected = isNullOrUndefined(array);
		expect(expected).toBe(true);
	});
	it('it checks an array is undefined', () => {
		let undefinedArray = undefined;
		expected = isNullOrUndefined(undefinedArray);
		expect(expected).toBe(true);
	});
	it('it checks an array has values', () => {
		array = [1, 2, 3];
		expected = isNullOrUndefined(array);
		expect(expected).toBe(false);
	});
});

describe('It test isNullorEmpty', () => {
	let array: any[];
	let expected: Boolean;

	it('it checks if the value is null', () => {
		expected = isNullOrEmpty(array);
		expect(expected).toBe(true);
	});
	it('it checks an array is empty', () => {
		array = [];
		expected = isNullOrEmpty(array);
		expect(expected).toBe(true);
	});
	it('it checks an array has values', () => {
		array = [1, 2, 3];
		expected = isNullOrEmpty(array);
		expect(expected).toBe(false);
	});
});

describe('It test isUndefined', () => {
	
	let expected: Boolean;
	it('it checks if value is undefined', () => {
		let undefinedValue = undefined;
		expected = isUndefined(undefinedValue);
		expect(expected).toBe(true);
	});
	it('it checks if the given value is defined', () => {
		let definedValue = 1;
		expected = isUndefined(definedValue);
		expect(expected).toBe(false);
	});
});

describe('It test isNullOrWhitespace', () => {

	let passedString: string;
	let expected: Boolean;
	it('it checks if the given string is null', () => {
		expected = isNullOrWhitespace(passedString);
		expect(expected).toBe(true);
	});
	it('it checks if string is white space', () => {
		passedString = '';
		expected = isNullOrWhitespace(passedString);
		expect(expected).toBe(true);
	});
	it('checks that the given string is not null or empty', () => {
		passedString = 'I am a valid string';
		expected = isNullOrWhitespace(passedString);
		expect(expected).toBe(false);
	});
});

describe('It test isStringAndEmpty', () => {

	let passedString: string;
	let expected: Boolean;
	it('it checks if the given string is type string and empty', () => {
		passedString = '';
		expected = isStringAndEmpty(passedString);
		expect(expected).toBe(true);
	});
	it('it checks if string is type string but not empty', () => {
		passedString = 'I am not an empty string';
		expected = isStringAndEmpty(passedString);
		expect(expected).toBe(false);
	});
	it('checks that the given value is not string', () => {
		let value = 123;
		expected = isStringAndEmpty(value);
		expect(expected).toBe(false);
	});
});

describe('It test isArrayAndEmpty', () => {

	let passedArray: any[];
	let expected: Boolean;
	it('it checks if the given svalue is an array and empty', () => {
		passedArray = [];
		expected = isArrayAndEmpty(passedArray);
		expect(expected).toBe(true);
	});
	it('it checks if string is type string but not empty', () => {
		passedArray = [1, 2, 3];
		expected = isArrayAndEmpty(passedArray);
		expect(expected).toBe(false);
	});
	it('checks that the given value is not array', () => {
		let value = 123;
		expected = isArrayAndEmpty(value);
		expect(expected).toBe(false);
	});
});

describe('It test isObject', () => {

	let passedObject: Object;
	let expected: Boolean;
	it('it checks if the given value is an object', () => {
		passedObject = {};
		expected = isObject(passedObject);
		expect(expected).toBe(true);
	});
	it('checks that the given value is not an object', () => {
		let value = 123;
		expected = isObject(value);
		expect(expected).toBe(false);
	});
});

describe('It test isObjectAndEmpty', () => {

	let passedObject: Object;
	let expected: Boolean;
	it('it checks if the given value is an empty object', () => {
		passedObject = {};
		expected = isObjectAndEmpty(passedObject);
		expect(expected).toBe(true);
	});
	it('it checks when object is not empty', () => {
		passedObject = {
			x: 1,
			y: 2
		};
		expected = isObjectAndEmpty(passedObject);
		expect(expected).toBe(false);
	});
	it('checks that the given value is not an object', () => {
		let value = 123;
		expected = isObject(value);
		expect(expected).toBe(false);
	});
});

describe('It test deepCopy', () => {

	let passedObject: Object;
	let expected: Object | null;
	
	it('it checks when object ius null', () => {
		expected = deepCopy(passedObject);
		expect(expected).toEqual(null);
	});
	it('it checks for deep copy of a given object', () => {
		passedObject = {
			a: 1,
			b: 2,
			c: {
				d: 3,
				e: 4
			}
		};
		expected = deepCopy(passedObject);
		expect(expected).toMatchObject(
			expect.objectContaining({
				a: 1,
				b: 2,
				c: {
					d: 3,
					e: 4
				}
			})
		);
	});

});