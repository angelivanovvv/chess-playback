import React, { useEffect, useState, useCallback } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import GamesIcon from '@material-ui/icons/Games';

import Wrapper from './../../common/Wrapper/Wrapper';
import Spinner from './../../common/Spinner/Spinner';

import useGames from './../../hooks/games';

import { ROUTES } from './../../constants/clientRoutes';

import './sidebar.scss';

const styles = {
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: 'green',
	},
};

const Sidebar = () => {
	const { isLoading, error, response } = useGames();

	const [selectedIndex, setSelectedIndex] = useState(0);

	const onSelected = useCallback((index) => {
		setSelectedIndex(index);
	}, []);

	useEffect(() => {
		// if (response) console.log('response ----> ', response.toJS());
		// ADD REDIRECT TO GO TO HOME AFTER REFRESH
		return () => {
			<Redirect to={ROUTES.HOME()} />;
		};
	}, [isLoading, error, response]);

	return (
		<Wrapper className="sidebar">
			<List component="nav" aria-label="secondary mailbox folder">
				{isLoading ? (
					<Spinner centered />
				) : (
					response?.map((item) => {
						return (
							<Link
								key={item.get('id')}
								to={ROUTES.GAME(item.get('id'))}
							>
								<ListItem
									button
									selected={selectedIndex === item.get('id')}
									onClick={() => onSelected(item.get('id'))}
								>
									<ListItemIcon>
										<GamesIcon />
									</ListItemIcon>
									<ListItemText
										primary={`${item.get(
											'white'
										)} vs ${item.get('black')}`}
									/>
									<Divider />
								</ListItem>
							</Link>
						);
					})
				)}
			</List>
		</Wrapper>
	);
};

Sidebar.propTypes = {};
Sidebar.defaultProps = {};

export default withStyles(styles)(Sidebar);
