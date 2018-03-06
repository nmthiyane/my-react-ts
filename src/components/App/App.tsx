import * as React from 'react';
import './App.css';

import { Race, Header, Controls } from '../';

interface State {
	raceInProgress: boolean;
	raceStartPosition: boolean;
	lastWinner: string;
}

export class App extends React.Component<{}, State> {
	constructor(props: {}) {
		super(props);

		this.state = {
			raceInProgress: false,
			raceStartPosition: true,
			lastWinner: ''
		};

		this.setWinner = this.setWinner.bind(this);
		this.startRace = this.startRace.bind(this);
		this.resetRace = this.resetRace.bind(this);
	}

	setWinner(lastWinner: string) {
		this.setState({ lastWinner, raceInProgress: false });
	}

	startRace() {
		this.setState({ ...this.state, raceInProgress: true, raceStartPosition: false });
	}

	resetRace() {
		this.setState({ ...this.state, raceStartPosition: true, lastWinner: '' });
	}

	render() {
		const { lastWinner, raceInProgress, raceStartPosition } = this.state;

		return (
			<div className="App" >
				<Header
					raceInProgress={raceInProgress}
					lastWinner={lastWinner}
				/>
				<article>
					<section>
						<Controls
							resetRace={this.resetRace}
							raceStartPosition={raceStartPosition}
							raceInProgress={raceInProgress}
							startRace={this.startRace}
						/>
						<Race
							raceInProgress={raceInProgress}
							raceStartPosition={raceStartPosition}
							setWinner={this.setWinner}
						/>
					</section>
				</article>
			</div>
		);
	}
}