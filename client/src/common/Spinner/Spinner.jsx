import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import Wrapper from './../Wrapper/Wrapper';

import './spinner.scss';

const styles = {
	root: {
		display: 'flex',
		'& > * + *': {
			marginLeft: 10,
		},
	},
};

const Spinner = ({ classes, centered }) => (
	<Wrapper
		className={`spinner ${centered ? 'spinner-centered' : ''} ${
			classes.root
		}`}
	>
		<CircularProgress color="secondary" size="30px" />
	</Wrapper>
);

Spinner.propTypes = {
	classes: PropTypes.shape({
		root: PropTypes.string,
	}),
	centered: PropTypes.bool,
};
Spinner.defaultProps = {
	classes: {
		root: '',
	},
	centered: false,
};

export default withStyles(styles)(Spinner);
