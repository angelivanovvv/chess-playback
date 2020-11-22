import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Wrapper from './../../common/Wrapper/Wrapper';

import { getRouteParam } from './../../utils/helpers';

import './chessPG.scss';

const ChessPlayground = ({ history }) => {
	const {
		location: { pathname },
	} = history;

	useEffect(() => {
		console.log(getRouteParam(pathname, 2));
	}, []);

	return <Wrapper className="chess-playground">Chess playground</Wrapper>;
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
