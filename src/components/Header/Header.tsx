import * as React from 'react';
import './Header.css';

import { ScoreBoard } from '../';

interface Props {
	raceInProgress: boolean;
	lastWinner: string;
}

export class Header extends React.Component<Props, {}> {
	render() {
		const { lastWinner, raceInProgress } = this.props;

		return (
			<header className="App-header" >
				<img
					src={require('../../images/logo.svg')}
					className={raceInProgress ? 'App-logo-active' : 'App-logo'}
					alt="logo"
				/>
				<h1 className="App-title">Implementation Race</h1>
				<ScoreBoard lastWinner={lastWinner} />
			</header>
		);
	}
}