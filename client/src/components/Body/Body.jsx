import React from 'react';
import { Switch, Route } from 'react-router';

import Wrapper from './../../common/Wrapper/Wrapper';
import ChessPG from '../ChessPG/ChessPG';

import { PATHS } from '../../constants/clientRoutes';

import './body.scss';

const Body = () => (
	<Wrapper className="body">
		<Switch>
			<Route path={PATHS.HOME} component={ChessPG} />
			<Route exact path={`${PATHS.GAME}/:id`} component={ChessPG} />
		</Switch>
	</Wrapper>
);

Body.propTypes = {};
Body.defaultProps = {};

export default Body;
