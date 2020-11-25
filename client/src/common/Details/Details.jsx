import React from 'react';
import PropTypes from 'prop-types';

import { Map } from 'immutable';

import moment from 'moment';

import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Spinner from './../Spinner/Spinner';

import './details.scss';

const styles = {
	root: {
		maxWidth: '560px',
		margin: '0 auto',
		marginTop: '10px',
		marginBottom: '10px',
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

const Details = ({ isLoading, game, classes }) => {
	return (
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
						{`${game.get('id') + 1}. ${game.get(
							'white'
						)} vs ${game.get('black')}`}
					</Typography>
					<Typography
						variant="h3"
						component="h3"
						className={classes.subtitle}
						gutterBottom
					>
						{`Result: ${game.get('result')}`}
					</Typography>
					<Typography
						variant="h3"
						component="h3"
						className={classes.subtitle}
						gutterBottom
					>
						{`Date: ${moment(game.get('date')).format(
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
						{game.get('moves')?.join(', ')}
					</Typography>
				</CardContent>
			)}
		</Card>
	);
};

Details.propTypes = {
	classes: PropTypes.shape({
		root: PropTypes.string,
		title: PropTypes.string,
		subtitle: PropTypes.string,
		content: PropTypes.string,
	}),
	isLoading: PropTypes.bool,
	game: PropTypes.instanceOf(Map),
};
Details.defaultProps = {
	classes: {
		root: '',
		title: '',
		subtitle: '',
		content: '',
	},
	isLoading: false,
	game: Map(),
};

export default withStyles(styles)(Details);
