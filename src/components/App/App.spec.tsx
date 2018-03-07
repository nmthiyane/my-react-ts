import * as React  from 'react';
import { App } from './App';
const renderer  = require('react-test-renderer');

describe('Snapshot test for the Header component', () => {

	it('renders a snapshot', () => {
	const tree = renderer.create((
		<App
		/>
		)).toJSON();
	expect(tree).toMatchSnapshot();
	});
});