import { useAuth } from 'hooks/auth';
import { EXPLORE, LOGIN } from 'lib/routes';
import React, { useEffect } from 'react';
import {
	Outlet,
	useLocation,
	useNavigate,
} from 'react-router-dom';
import { Box, Flex, Text } from '@chakra-ui/react';
import { BallTriangle } from 'react-loader-spinner';

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

	if (isLoading)
		return (
			<div
				style={{
					border: '1px solid #000',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh',
				}}
			>
				<BallTriangle
					height={100}
					width={100}
					radius={5}
					color="teal"
					ariaLabel="ball-triangle-loading"
					wrapperClass={{}}
					wrapperStyle=""
					visible={true}
				/>
			</div>
		);
		return (
			<>
				<Box w="full" bgColor={'white'}>
					<Outlet />
				</Box>
			</>
		);
}
