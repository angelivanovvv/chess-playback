import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Wrapper from './../../common/Wrapper/Wrapper';
import Sidebar from './../Sidebar/Sidebar';
import Body from './../Body/Body';

import useGames from './../../hooks/games';

import './layout.scss';

const styles = {
	root: {
		flexGrow: 1,
	},
};

const Layout = ({ classes }) => {
	const { onFetchGames } = useGames();

	useEffect(() => {
		onFetchGames();
	}, [onFetchGames]);

	return (
		<Wrapper className={`layout ${classes.root}`}>
			<Grid container>
				<Grid item xs={12} md={4}>
					<Sidebar />
				</Grid>
				<Grid item xs={12} md={8}>
					<Body />
				</Grid>
			</Grid>
		</Wrapper>
	);
};

Layout.propTypes = {
	classes: PropTypes.shape({
		root: PropTypes.string,
	}),
};
Layout.defaultProps = {
	classes: {
		root: '',
	},
};

export default withStyles(styles)(Layout);
