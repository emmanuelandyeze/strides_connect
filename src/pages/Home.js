import { Flex } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import { useAuth } from 'hooks/auth';
import { EVENTS } from 'lib/routes';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Nav from '../components/Navbar';
import SimpleSidebar from '../components/Sidebar';
import HomeNav from 'components/mobileNav/Home';
import PostList from 'components/posts/PostList';

function Home() {
	return (
		<div>
			<Flex>
				<Box display={{ base: 'none', md: 'block' }}>
					<SimpleSidebar />
				</Box>
				<div style={{ width: '100%' }}>
					<Nav />
					<Box
						bg={useColorModeValue('white', 'gray.900')}
						// height="100vh"
						py="24"
						pr={{ base: '5', md: '10' }}
						pl={{ base: '4', md: '10' }}
						align={'center'}
					>
						<Box maxWidth="680px">
							<PostList />
						</Box>

						<HomeNav />
					</Box>
				</div>
			</Flex>
		</div>
	);
}

export default Home;
