import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import GamesIcon from '@material-ui/icons/Games';

import Wrapper from './../../common/Wrapper/Wrapper';
import Spinner from './../../common/Spinner/Spinner';

import useGames from './../../hooks/games';

import { ROUTES, ROUTES_ACTIONS } from './../../constants/clientRoutes';

import './sidebar.scss';

const Sidebar = () => {
	const dispatch = useDispatch();
	const { isLoading, response } = useGames();

	const [selectedIndex, setSelectedIndex] = useState(0);

	const onSelected = useCallback((index) => {
		setSelectedIndex(index);
	}, []);

	useEffect(() => {
		return () => {
			dispatch(ROUTES_ACTIONS.toHome());
		};
	}, [isLoading, response]);

	return (
		<Wrapper className="sidebar">
			<List disablePadding={true} component="nav" aria-label="primary">
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

Sidebar.propTypes = {
	classes: PropTypes.shape({
		root: PropTypes.string,
	}),
};
Sidebar.defaultProps = {
	classes: {
		root: '',
	},
};

export default Sidebar;
