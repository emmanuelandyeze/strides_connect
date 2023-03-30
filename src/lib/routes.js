import Login from 'components/auth/Login';
import Register from 'components/auth/Register';
import Layout from 'components/Layout';
import SinglePost from 'components/posts/SinglePost';
import Community from 'pages/Community';
import Events from 'pages/Events';
import Explore from 'pages/Explore';
import Posts from 'pages/Explore/Posts';
import HomePage from 'pages/HomePage';
import Profile from 'pages/Profile';
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
export const PROFILE = '/profile/:id';
export const EXPLOREPOSTS = '/explore/posts';
export const SINGLEPOST = '/posts/:id';

export const router = createBrowserRouter([
	{ path: HOMEPAGE, element: <HomePage /> },
	{ path: LOGIN, element: <Login /> },
	{ path: REGISTER, element: <Register /> },
	{ path: EXPLORE, element: <Explore /> },
	{ path: EXPLOREPOSTS, element: <Posts /> },
	{ path: PROFILE, element: <Profile /> },
	{ path: SINGLEPOST, element: <SinglePost /> },

	{
		path: APP,
		element: <Layout />,
		children: [
			{ path: ROOT, element: <Home /> },
			{ path: COMMUNITY, element: <Community /> },
			{ path: EVENTS, element: <Events /> },
		],
	},
]);
