export const PATHS = Object.freeze({
	HOME: '/',
	GAME: '/game',
});

export const ROUTES = Object.freeze({
	HOME: () => PATHS.HOME,
	GAME: (id) => `${PATHS.GAME}/${id}`,
});
