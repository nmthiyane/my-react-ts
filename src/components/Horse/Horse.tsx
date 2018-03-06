import * as React from 'react';
import './Horse.css';

import { Racer } from '../../models';
import { calculateRacerPosition } from '../../utils';

interface Props {
	racer: Racer;
	trackOffset?: Function;
	raceInProgress?: boolean;
	raceStartPosition?: boolean;
	setWinner?: (winner: string) => void;
}

interface State {
	racerPosition: number;
}

export class Horse extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			racerPosition: 0
		};

		this.determineRacerPosition = this.determineRacerPosition.bind(this);
		this.doRacing = this.doRacing.bind(this);
	}

	componentWillUpdate(nextProps: Props, nextState: State) {
		const { racerPosition } = nextState;
		const { raceInProgress, setWinner, racer, trackOffset, raceStartPosition } = nextProps;
		if (raceInProgress) {
			if ((trackOffset && trackOffset()) - 100 > racerPosition) {
				this.doRacing();
			}
			else if (setWinner) {
				setWinner(racer.login);
			}
		}
		else if (raceStartPosition && racerPosition !== 0) {
			this.setState({ racerPosition: 0 });
		}
	}

	determineRacerPosition() {
		const { racerPosition } = this.state;
		this.setState({ racerPosition: calculateRacerPosition(racerPosition) });
	}

	doRacing() {
		setTimeout(() => this.determineRacerPosition(), 15);
	}

	render() {
		const { racer } = this.props;
		const { racerPosition } = this.state;
		return (
			<div
				className="Horse"
				style={{ paddingLeft: `${racerPosition}px` }}
			>
				<img
					height="100px"
					src={racer.avatar_url}
				/>
			</div>
		);
	}
}