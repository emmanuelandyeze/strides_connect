import {
	Flex,
	HStack,
	SimpleGrid,
	StackDivider,
	VStack,
} from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import Nav from '../components/CommunityNavbar';
import SimpleSidebar from '../components/CommunitySidebar';
import {
	Heading,
	Avatar,
	Center,
	Text,
	Stack,
	Button,
	Link,
	Badge,
} from '@chakra-ui/react';

function Community() {
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
						align={'center'}
					>
						<h1>Suggested Communities</h1>
					</Box>
				</div>
			</Flex>
		</div>
	);
}

export default Community;
