import * as React from 'react';
import * as shuffle from 'shuffle-array';
import './Race.css';

import { Track, Horse } from '../';
import { Racer } from '../../models';
import { getRacerData } from '../../utils';

interface Props {
	raceInProgress?: boolean;
	raceStartPosition?: boolean;
	setWinner: (winner: string) => void;
}

interface State {
	racers: Racer[];
}

export class Race extends React.Component<Props, State> {
	raceElement: HTMLDivElement;
	constructor(props: Props) {
		super(props);

		this.state = {
			racers: []
		};

		this.setRacers = this.setRacers.bind(this);
		this.setRaceElement = this.setRaceElement.bind(this);
		this.getRaceOffset = this.getRaceOffset.bind(this);
	}

	componentWillMount() {
		this.setRacers();
	}

	componentWillUpdate(nextProps: Props, nextState: State) {
		if (!nextProps.raceInProgress && (nextProps.raceStartPosition !== this.props.raceStartPosition)) {
			this.setRacers();
		}
	}

	setRacers() {
		const raceData = shuffle(getRacerData()).splice(0, 5);

		this.setState({ ...this.state, racers: raceData });
	}

	setRaceElement(element: HTMLDivElement) {
		this.raceElement = element;
	}

	getRaceOffset() {
		return this.raceElement.offsetWidth;
	}

	render() {
		const { setWinner, raceInProgress, raceStartPosition } = this.props;
		const { racers } = this.state;

		return (
			<div
				ref={(element) => this.setRaceElement(element as HTMLDivElement)}
				className="Race"
			>
				{racers.map(racer => (
					<div key={racer.id}>
						<Track>
							<Horse
								trackOffset={this.getRaceOffset}
								raceInProgress={raceInProgress}
								raceStartPosition={raceStartPosition}
								setWinner={setWinner}
								racer={racer}
							/>
						</Track>
					</div>
				))}
			</div>
		);
	}
}