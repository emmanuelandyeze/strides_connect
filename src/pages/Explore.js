import { AddIcon } from '@chakra-ui/icons';
import {
	Avatar,
	Badge,
	Button,
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
import Nav from '../components/ExploreNavbar';
import SimpleSidebar from '../components/ExploreSidebar';
import ExploreNav from 'components/mobileNav/Explore';

function Explore() {
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
						// height="100vh"
						pt="24"
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
									variant="solid"
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
									variant={'outline'}
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

						<Accordion allowToggle maxWidth={'680px'}>
							<AccordionItem>
								<h2>
									<AccordionButton>
										<Flex
											justifyContent={'space-between'}
											w={'full'}
										>
											<Flex
												justifyContent={'space-between'}
												alignItems="flex-start"
											>
												<Link
													as={routerLink}
													to="/profile/@the_transformer"
												>
													<Flex alignItems={'flex-start'}>
														<Avatar
															size={'md'}
															src={
																'https://trueme.co/wp-content/uploads/2015/12/steps.jpg'
															}
															alt={'Avatar Alt'}
															mb={4}
															pos={'relative'}
														/>
														<VStack
															align={'left'}
															ml={'3'}
															spacing="1"
														>
															<Heading
																fontSize={'lg'}
																fontFamily={'body'}
																textAlign="left"
															>
																The Transformer
															</Heading>
															<Text
																fontWeight={600}
																color={'gray.500'}
																mb={4}
																textAlign="left"
																fontSize={'sm'}
															>
																By Emmanuel Andy Eze
															</Text>
														</VStack>
													</Flex>
												</Link>
											</Flex>
											<AccordionIcon />
										</Flex>
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4} textAlign="left">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna
									aliqua. Ut enim ad minim veniam, quis
									nostrud exercitation ullamco laboris nisi
									ut aliquip ex ea commodo consequat. <br />
									<Flex
										flexDirection={'row-reverse'}
										justifyContent="space-between"
										alignItems={'center'}
									>
										<Button
											leftIcon={<AddIcon />}
											colorScheme="teal"
											variant="outline"
											mt={'2'}
											size="sm"
										>
											Add
										</Button>
										<Code>Career development</Code>
									</Flex>
								</AccordionPanel>
							</AccordionItem>
							<AccordionItem>
								<h2>
									<AccordionButton>
										<Flex
											justifyContent={'space-between'}
											w={'full'}
										>
											<Flex
												justifyContent={'space-between'}
												alignItems="flex-start"
											>
												<Flex alignItems={'flex-start'}>
													<Avatar
														size={'md'}
														src={
															'https://substackcdn.com/image/fetch/w_264,c_limit,f_webp,q_auto:best,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fead5946d-d43b-4470-a621-8442a80cec91_128x128.png'
														}
														alt={'Avatar Alt'}
														mb={4}
														bgColor="white"
														pos={'relative'}
													/>
													<VStack
														align={'left'}
														ml={'3'}
														spacing="1"
													>
														<Heading
															fontSize={'lg'}
															fontFamily={'body'}
															textAlign="left"
														>
															Not the boring tech stuff
														</Heading>
														<Text
															fontWeight={600}
															color={'gray.500'}
															mb={4}
															textAlign="left"
															fontSize={'sm'}
														>
															By HackSultan
														</Text>
													</VStack>
												</Flex>
											</Flex>
											<AccordionIcon />
										</Flex>
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4} textAlign="left">
									Not a regular boring tech newsletter,
									focused on the interesting news happening
									in the Africa tech ecosystem ( Mostly 9ja
									tech twitter) + giveaway updates before
									they get to the public. <br />
									<Flex
										flexDirection={'row-reverse'}
										justifyContent="space-between"
										alignItems={'center'}
									>
										<Button
											leftIcon={<AddIcon />}
											colorScheme="teal"
											variant="outline"
											mt={'2'}
											size="sm"
										>
											Add
										</Button>
										<Code>Technology</Code>
									</Flex>
								</AccordionPanel>
							</AccordionItem>
						</Accordion>
					</Box>
				</div>
			</Flex>
		</div>
	);
}

export default Explore;
