import * as cookie from 'cookie';
import api from '../../services/api';

export const post = async (event) => {
	const data = await event.request.formData();

	const username = data.get('username');
	const password = data.get('password');

	const {
		data: { access, refresh }
	} = await api.post('/auth/login/', {
		username,
		password
	});

	const {
		data: { user }
	} = await api.get('/auth/users/me/', {
		headers: {
			Authorization: `Bearer ${access}`
		}
	});

	const access_cookie = cookie.serialize('access', access, {
		path: '/dashboard',
		httpOnly: true
	});

	console.log(access_cookie);

	const refresh_cookie = cookie.serialize('refresh', refresh, {
		path: '/dashboard',
		httpOnly: true
	});

	const user_cookie = cookie.serialize('user', user, {
		path: '/dashboard',
		httpOnly: true
	});

	return {
		headers: {
			location: '/dashboard',
			'set-cookie': [access_cookie, refresh_cookie, user_cookie]
		},
		status: 302
	};
};
