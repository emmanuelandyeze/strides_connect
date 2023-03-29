import { useAuth } from 'hooks/auth';
import { EXPLORE, LOGIN } from 'lib/routes';
import React, { useEffect } from 'react';
import {
	Outlet,
	useLocation,
	useNavigate,
} from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';

export default function Layout() {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const { user, isLoading } = useAuth();

	useEffect(() => {
		if (
			!isLoading &&
			pathname.startsWith('/app') &&
			!user
		) {
			navigate(EXPLORE);
		}
	}, [pathname, user, isLoading, navigate]);

	if (!isLoading)
		return (
			<>
				<Box w="full" bgColor={'white'}>
					<Outlet />
				</Box>
			</>
		);
}
