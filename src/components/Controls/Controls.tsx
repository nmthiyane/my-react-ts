import * as React from 'react';
import './Controls.css';

interface Props {
	raceInProgress?: boolean;
	raceStartPosition?: boolean;
	resetRace?: (event: MouseEventInit) => void;
	startRace?: (event: MouseEventInit) => void;
}

export class Controls extends React.Component<Props, {}> {
	constructor(props: Props) {
		super(props);
	}
	render() {
		const {
			raceInProgress,
			startRace,
			raceStartPosition,
			resetRace
		} = this.props;

		return (
			<div className="Controls">
				<button
					disabled={!raceStartPosition || raceInProgress}
					type="button"
					onClick={startRace}
				>
					Start
				</button>
				<button
					disabled={raceStartPosition || raceInProgress}
					type="button"
					onClick={resetRace}
				>
					Reset
				</button>
			</div>
		);
	}
}