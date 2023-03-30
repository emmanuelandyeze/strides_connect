import { AddIcon } from '@chakra-ui/icons';
import {
	Avatar,
	Badge,
	Button,
	Card,
	CardBody,
	CardHeader,
	Center,
	Code,
	Flex,
	Heading,
	Image,
	Link,
	SimpleGrid,
	Stack,
	StackDivider,
	Tag,
	Text,
	useDisclosure,
	VStack,
} from '@chakra-ui/react';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from '@chakra-ui/react';
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
} from '@chakra-ui/react';
import { Link as routerLink } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import Nav from 'components/ExploreNavbar';
import SimpleSidebar from 'components/ExploreSidebar';
import PostList from 'components/posts/PostList';
import ExploreNav from 'components/mobileNav/Explore';

function Posts() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<div>
			<Flex>
				<Box display={{ base: 'none', md: 'block' }}>
					<SimpleSidebar />
				</Box>
				<div style={{ width: '100%' }}>
					<Nav />

					<ExploreNav />
					<Box
						bg={useColorModeValue('white', 'gray.900')}
						pt="24"
						pb={'24'}
						pr={{ base: '5', md: '10' }}
						pl={{ base: '4', md: '10' }}
						align="center"
					>
						<Stack
							spacing={4}
							direction="row"
							align="stretch"
							maxWidth={'680px'}
							pb={'5'}
						>
							<Box>
								<Button
									colorScheme="teal"
									size={'sm'}
									variant="outline"
									rounded="3xl"
									as={routerLink}
									to="/explore"
								>
									Publications
								</Button>
							</Box>
							<Box>
								<Button
									colorScheme="teal"
									size="sm"
									variant={'solid'}
									rounded="3xl"
									as={routerLink}
									to="/explore/posts"
								>
									Posts
								</Button>
							</Box>
							<Box>
								<Button
									colorScheme="teal"
									size="sm"
									variant={'outline'}
									rounded="3xl"
									as={routerLink}
									to="/explore/communities"
								>
									Communities
								</Button>
							</Box>

							<Box>
								<Button
									colorScheme="teal"
									size={'sm'}
									variant="outline"
									rounded="3xl"
									as={routerLink}
									to="/explore/events"
								>
									Events
								</Button>
							</Box>
						</Stack>

						<PostList />
					</Box>
				</div>
			</Flex>
		</div>
	);
}

export default Posts;
