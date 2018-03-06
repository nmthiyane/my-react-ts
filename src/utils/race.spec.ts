/*
 Author: Ntuthuko Mthiyane
 Date: 06/03/2018
 Description: This test is responsible for testing functions in race.js
*/

import { calculateRacerPosition } from './race';

describe('it tests the calculate racer position function in race', () => {

	let currentPosition: number = 0;
	let expected: number;
	it('It checks that the position of racer increases everytime', () => {
		while (currentPosition <= 100) {
			expected = calculateRacerPosition(currentPosition);
			expect(expected).toBeGreaterThan(currentPosition);
			currentPosition = expected;
		}
	});
});
