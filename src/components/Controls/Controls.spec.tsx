import * as React  from 'react';
import { Controls } from './Controls';
const renderer  = require('react-test-renderer');

describe('Snapshot test for the Controls component', () => {

	it('renders a snapshot', () => {
	const tree = renderer.create((
		<Controls 
		/>
		)).toJSON();
	expect(tree).toMatchSnapshot();
	});
});