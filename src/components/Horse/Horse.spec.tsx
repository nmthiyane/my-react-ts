import * as React  from 'react';
import { Horse } from './Horse';
import { Racer } from '../../models';
import { getRacerData } from '../../utils';

const renderer  = require('react-test-renderer');

describe('Snapshot test for the Horse component', () => {
	
	let racer: Racer = getRacerData()[0];
	it('renders a snapshot', () => {
	const tree = renderer.create((
		<Horse 
			racer={racer}
		/>
		)).toJSON();
	expect(tree).toMatchSnapshot();
	});
});