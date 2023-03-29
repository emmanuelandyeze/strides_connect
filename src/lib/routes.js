import Login from 'components/auth/Login';
import Register from 'components/auth/Register';
import Layout from 'components/Layout';
import Community from 'pages/Community';
import Events from 'pages/Events';
import Explore from 'pages/Explore';
import HomePage from 'pages/HomePage';
import Settings from 'pages/Settings';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';

export const HOMEPAGE = '/';
export const ROOT = '/app';
export const APP = '/app';
export const LOGIN = '/login';
export const REGISTER = '/register';
export const EXPLORE = '/explore';
export const COMMUNITY = '/app/community';
export const EVENTS = '/app/events';
export const SETTINGS = '/app/settings';

export const router = createBrowserRouter([
	{ path: HOMEPAGE, element: <HomePage /> },
	{ path: LOGIN, element: <Login /> },
	{ path: REGISTER, element: <Register /> },
	{ path: EXPLORE, element: <Explore /> },

	{
		path: APP,
		element: <Layout />,
		children: [
			{ path: ROOT, element: <Home /> },
			{ path: COMMUNITY, element: <Community /> },
			{ path: EVENTS, element: <Events /> },
			{ path: SETTINGS, element: <Settings /> },
		],
	},
]);
