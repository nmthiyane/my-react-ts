import * as React  from 'react';
import { Track } from './Track';
const renderer  = require('react-test-renderer');

describe('Snapshot test for the entire app', () => {
	it('renders a snapshot', () => {
	const tree = renderer.create((<Track />)).toJSON();
	expect(tree).toMatchSnapshot();
	});
});