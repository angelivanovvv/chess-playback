import { fromJS } from 'immutable';

export const transformResponse = (response) =>
	response ? fromJS(response?.body) : response?.body;

export const transformError = (error) => {
	return error
		? fromJS({
				status: error?.response?.status,
				statusText: error?.response?.statusText,
				errors: error?.response?.body,
		  })
		: error?.response;
};

export const getRouteParam = (route, position) => route?.split('/')[position];
