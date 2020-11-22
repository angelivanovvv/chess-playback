import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getGames } from './../redux/selectors/gamesSelectors';

import { initGames } from './../redux/actions/initSagaActions';

const useGames = () => {
	const dispatch = useDispatch();

	const games = useSelector((state) => getGames(state));

	const isLoading = games?.get('isLoading');
	const error = games?.get('error');
	const response = games?.get('response');

	const onFetchGames = useCallback(() => dispatch(initGames()), [dispatch]);

	return {
		isLoading,
		error,
		response,
		onFetchGames,
	};
};

export default useGames;
