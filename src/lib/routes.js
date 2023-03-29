import Community from 'pages/Community';
import Events from 'pages/Events';
import Explore from 'pages/Explore';
import Settings from 'pages/Settings';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';

export const ROOT = '/';
export const EXPLORE = '/explore';
export const COMMUNITY = '/community';
export const EVENTS = '/events';
export const SETTINGS = '/settings';

export const router = createBrowserRouter([
	{ path: ROOT, element: <Home /> },
	{ path: EXPLORE, element: <Explore /> },
	{ path: COMMUNITY, element: <Community /> },
	{ path: EVENTS, element: <Events /> },
	{ path: SETTINGS, element: <Settings /> },
]);
