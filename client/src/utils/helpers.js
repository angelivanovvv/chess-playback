import { fromJS } from 'immutable';

export const transformResponse = (response) =>
	response ? fromJS(response?.data) : response?.data;

export const transformError = (error) => {
	return error
		? fromJS({
				status: error?.response?.status,
				statusText: error?.response?.statusText,
				errors: error?.response?.body,
		  })
		: error?.response;
};

export const getRouteParam = (route) => route?.split('/')[2];

export const append_ID = (data) => data.map((item, index) => (item.id = index));
