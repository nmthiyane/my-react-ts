import * as React from 'react';
import './Track.css';

export class Track extends React.Component<{}, {}> {
	render() {
		return (
			<div className="Track" >
				{this.props.children}
			</div>
		);
	}
}