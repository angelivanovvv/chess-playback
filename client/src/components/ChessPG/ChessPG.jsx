import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import moment from 'moment';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Wrapper from './../../common/Wrapper/Wrapper';
import Spinner from './../../common/Spinner/Spinner';

import useGames from './../../hooks/games';

import { getRouteParam } from './../../utils/helpers';

import './chessPG.scss';

const styles = {
	root: {
		maxWidth: 600,
		margin: '0 auto',
		marginTop: '25px',
		textAlign: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'black',
		paddingBottom: '5px',
	},
	subtitle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'black',
		paddingBottom: '5px',
	},
	content: {
		fontSize: 12,
	},
};

const ChessPlayground = ({ history, classes }) => {
	const {
		location: { pathname },
	} = history;

	const { isLoading, response } = useGames();
	const [game_ID, setGame_ID] = useState(0);
	const [currentGame, setCurrentGame] = useState(Map());

	useEffect(() => {
		if (pathname !== '/') setGame_ID(parseInt(getRouteParam(pathname)));
	}, [pathname]);

	useEffect(() => {
		response?.forEach((game, index) =>
			game_ID === index ? setCurrentGame(game) : null
		);
	}, [response, game_ID]);

	return (
		<Wrapper className="chess-playground">
			<Card className={classes.root}>
				{isLoading ? (
					<Spinner centered />
				) : (
					<CardContent>
						<Typography
							variant="h4"
							component="h4"
							className={classes.title}
							gutterBottom
						>
							{`${currentGame.get('id') + 1}. ${currentGame.get(
								'white'
							)} vs ${currentGame.get('black')}`}
						</Typography>
						<Typography
							variant="h3"
							component="h3"
							className={classes.subtitle}
							gutterBottom
						>
							{`Result: ${currentGame.get('result')}`}
						</Typography>
						<Typography
							variant="h3"
							component="h3"
							className={classes.subtitle}
							gutterBottom
						>
							{`Date: ${moment(currentGame.get('date')).format(
								'MM/DD/YYYY'
							)}`}
						</Typography>
						<Typography
							variant="h3"
							component="h3"
							className={classes.subtitle}
							gutterBottom
						>
							Moves
						</Typography>
						<Typography
							variant="body2"
							component="p"
							className={classes.content}
						>
							{currentGame.get('moves')?.join(', ')}
						</Typography>
					</CardContent>
				)}
			</Card>

			<Wrapper className="game-board">chess board</Wrapper>
		</Wrapper>
	);
};

ChessPlayground.propTypes = {
	history: PropTypes.shape({
		location: PropTypes.shape({
			pathname: PropTypes.string,
		}),
	}),
	classes: PropTypes.shape({
		root: PropTypes.string,
		title: PropTypes.string,
		subtitle: PropTypes.string,
		content: PropTypes.string,
	}),
};
ChessPlayground.defaultPros = {
	history: {
		location: {
			pathname: '',
		},
	},
	classes: {
		root: '',
		title: '',
		subtitle: '',
		content: '',
	},
};

export default withStyles(styles)(ChessPlayground);
