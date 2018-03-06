import { Racer } from '../models';

const data: Racer[] = require('../data/team.json');

/**
 * Returns an array of racers
 *
 * @export
 * @returns {Racer[]}
 */
export function getRacerData(): Racer[] {
	return data;
}