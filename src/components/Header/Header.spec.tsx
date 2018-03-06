import * as React  from 'react';
import { Header } from './Header';
const renderer  = require('react-test-renderer');

describe('Snapshot test for the entire app', () => {
	let lastWinner: string =  'nmthiyane';
	let raceInProgress: boolean = false;
	it('renders a snapshot', () => {
	const tree = renderer.create((
		<Header 
			lastWinner={lastWinner} 
			raceInProgress={raceInProgress}
		/>
		)).toJSON();
	expect(tree).toMatchSnapshot();
	});
});