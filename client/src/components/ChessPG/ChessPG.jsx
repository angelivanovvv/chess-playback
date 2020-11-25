import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';

import Wrapper from './../../common/Wrapper/Wrapper';
import Details from './../../common/Details/Details';
import Chess from './../../common/Chess/Chess';

import useGames from './../../hooks/games';

import { getRouteParam } from './../../utils/helpers';

import './chessPG.scss';

const ChessPlayground = ({ history }) => {
	const {
		location: { pathname: id },
	} = history;

	const { isLoading, response } = useGames();
	const [game_ID, setGame_ID] = useState(0);
	const [gameLoaded, setGameLoaded] = useState(false);
	const [gameReseted, setGameReseted] = useState(false);
	const [selectedGame, setSelectedGame] = useState(Map());

	const onDefaultReset = useCallback(() => {
		setGameReseted(false);
	}, [setGameReseted]);

	useEffect(() => {
		if (id === '/') {
			setGameLoaded(false);
		} else {
			setGame_ID(parseInt(getRouteParam(id)));
			setGameLoaded(true);
		}
		response?.forEach((game, index) =>
			game_ID === index ? setSelectedGame(game) : null
		);
	}, [id, response, game_ID]);

	useEffect(() => {
		if (id !== game_ID && !isNaN(parseInt(getRouteParam(id)))) {
			setGameReseted(true);
		}
	}, [id]);

	return (
		<Wrapper className="chess-playground">
			{!gameLoaded ? null : (
				<>
					<Details
						isReset={gameReseted}
						isLoading={isLoading}
						game={selectedGame}
					/>
					<Chess
						isReset={gameReseted}
						isLoading={isLoading}
						game={selectedGame}
						onDefaultReset={onDefaultReset}
					/>
				</>
			)}
		</Wrapper>
	);
};

ChessPlayground.propTypes = {
	history: PropTypes.shape({
		location: PropTypes.shape({
			pathname: PropTypes.string,
		}),
	}),
};
ChessPlayground.defaultPros = {
	history: {
		location: {
			pathname: '',
		},
	},
};

export default ChessPlayground;
