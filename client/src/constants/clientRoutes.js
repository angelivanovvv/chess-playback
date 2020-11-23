import { push } from 'connected-react-router/immutable';

export const PATHS = Object.freeze({
	HOME: '/',
	GAME: '/game',
});

export const ROUTES = Object.freeze({
	HOME: () => PATHS.HOME,
	GAME: (id) => `${PATHS.GAME}/${id}`,
});

export const ROUTES_ACTIONS = Object.freeze({
	toHome: () => push(ROUTES.HOME()),
});
