import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';

import Wrapper from './../Wrapper/Wrapper';
import Spinner from './../Spinner/Spinner';

import Chessboard from 'chessboardjsx';

import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import RestoreIcon from '@material-ui/icons/Restore';

import './chess.scss';

const styles = {
	buttonGroup: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: '15px',
		marginBottom: '25px',
	},
	button: {
		marginRight: '10px',
	},
};

const chessboardStyles = {
	margin: '0 auto',
};

const Chess = ({ isLoading, isReset, game, onDefaultReset, classes }) => {
	let timer;
	const [position, setPosition] = useState(0);
	const [isStarted, setIsStarted] = useState(false);
	const [isDisabled, setIsDisabled] = useState(false);

	const onPlayGame = useCallback(() => {
		setIsStarted(true);
		setIsDisabled(true);

		timer = setInterval(() => {
			setPosition((prevState) => prevState + 1);
		}, 1000);
	}, [timer]);

	const onStopGame = useCallback(() => {
		setIsStarted(false);
		setIsDisabled(false);
		clearInterval(timer);
	}, [timer]);

	const onNextMove = useCallback(() => {
		if (position < game?.get('fens')?.size) {
			setPosition((prevState) => prevState + 1);
		}
	}, [position, setPosition]);

	const onResetGame = useCallback(() => {
		setIsStarted(false);
		setIsDisabled(false);
		setPosition(0);
		clearInterval(timer);
	}, []);

	useEffect(() => {
		if (isReset) {
			onDefaultReset();
			onResetGame();
		}
		if (position === game?.get('fens')?.size - 1) {
			onStopGame();
		}
		return () => {
			clearInterval(timer);
		};
	}, [position, isReset]);

	return (
		<Wrapper className="game-board">
			{isLoading ? (
				<Spinner centered />
			) : (
				<>
					<Chessboard
						position={`${
							position !== 0
								? game?.get('fens')?.get(position)
								: 'start'
						}`}
						boardStyle={chessboardStyles}
					/>
					<Wrapper className={classes.buttonGroup}>
						{isStarted ? (
							<Button
								onClick={onStopGame}
								variant="contained"
								color="primary"
								className={classes.button}
								endIcon={<StopIcon />}
							>
								Stop
							</Button>
						) : (
							<Button
								onClick={onPlayGame}
								variant="contained"
								color="primary"
								className={classes.button}
								endIcon={<PlayArrowIcon />}
							>
								Play
							</Button>
						)}
						<Button
							onClick={onNextMove}
							variant="contained"
							color="primary"
							disabled={isDisabled}
							className={classes.button}
							endIcon={<ArrowForwardIosIcon />}
						>
							Next
						</Button>
						<Button
							onClick={onResetGame}
							variant="contained"
							color="primary"
							disabled={isDisabled}
							className={classes.button}
							endIcon={<RestoreIcon />}
						>
							Reset
						</Button>
					</Wrapper>
				</>
			)}
		</Wrapper>
	);
};

Chess.propTypes = {
	classes: PropTypes.shape({
		button: PropTypes.string,
		buttonGroup: PropTypes.string,
	}),
	isLoading: PropTypes.bool,
	isReset: PropTypes.bool,
	game: PropTypes.instanceOf(Map),
	onDefaultReset: PropTypes.func,
};
Chess.defaultProps = {
	classes: {
		button: '',
		buttonGroup: '',
	},
	isLoading: false,
	isReset: false,
	game: Map(),
	onDefaultReset: () => {},
};

export default withStyles(styles)(Chess);
