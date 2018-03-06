import * as React from 'react';
import './ScoreBoard.css';

interface Props {
	lastWinner: string;
}

export class ScoreBoard extends React.Component<Props, {}> {
	constructor(props: Props) {
		super(props);
	}
	render() {
		const { lastWinner } = this.props;

		if (!!lastWinner) {
			return (
				<div className="ScoreBoard">
					<h2 className="winner">
						Winner:&nbsp;
					<span>{lastWinner}</span>
					</h2>
				</div>
			);
		}
		else {
			return (
				<div className="ScoreBoard">
					<h2 className="grads">Kurtosys Grads</h2>
				</div>
			);
		}
	}
}