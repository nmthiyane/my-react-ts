import * as React  from 'react';
import * as shuffle from 'shuffle-array';
import { Race } from './Race';
import { Racer } from '../../models';
import { getRacerData } from '../../utils';

const renderer  = require('react-test-renderer');

describe('Snapshot test for the Race component', () => {
	
	let racers: Racer[] = getRacerData();
	let setWinner: Function; // (lastWinner: string) => { };
	jest.mock('shuffle-array');
	shuffle.mockImplementation(() => racers);
	shuffle(racers) = jest.fn(() => racers); // jest.genMockFunction().mockReturnValue(racers);
	it('renders a snapshot', () => {
	const tree = renderer.create((
		<Race
			setWinner={setWinner}
		/>
		)).toJSON();
	expect(tree).toMatchSnapshot();
	});
});