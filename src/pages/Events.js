import { Flex } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import EventsNav from 'components/mobileNav/Events';
import React from 'react';
import Nav from '../components/EventsNavbar';
import SimpleSidebar from '../components/EventsSidebar';

function Events() {
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
						height="100vh"
						pt="24"
						pr={{ base: '5', md: '10' }}
						pl={{ base: '4', md: '10' }}
					>
						<EventsNav />
						<h1>Event page</h1>
					</Box>
				</div>
			</Flex>
		</div>
	);
}

export default Events;
