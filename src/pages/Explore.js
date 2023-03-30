import {
	Avatar,
	Badge,
	Button,
	Center,
	Flex,
	Heading,
	Image,
	Link,
	SimpleGrid,
	Stack,
	StackDivider,
	Text,
	VStack,
} from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import Nav from '../components/ExploreNavbar';
import SimpleSidebar from '../components/ExploreSidebar';

function Explore() {
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
						align="center"
					>
						<Stack
							spacing={4}
							direction="row"
							// align="center"
							pb={'5'}
						>
							<Box>
								<Button
									colorScheme="teal"
									size="sm"
									variant={'outline'}
									rounded="3xl"
								>
									Communities
								</Button>
							</Box>
							<Box>
								<Button
									colorScheme="teal"
									size={'sm'}
									variant="solid"
									rounded="3xl"
								>
									Publications
								</Button>
							</Box>
							<Box>
								<Button
									colorScheme="teal"
									size={'sm'}
									variant="outline"
									rounded="3xl"
								>
									Events
								</Button>
							</Box>
						</Stack>
						<VStack
							divider={
								<StackDivider borderColor="gray.200" />
							}
							spacing={4}
							align="stretch"
							maxWidth={'800px'}
						>
							<Box textAlign={'left'}>
								<Box
									// maxW={'520px'}
									w={'full'}
									bg={useColorModeValue(
										'white',
										'gray.900',
									)}
									rounded={'lg'}
									py={3}
									px={1}
									textAlign={'center'}
								>
									<Flex
										justifyContent={'space-between'}
										alignItems="flex-start"
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
										<Button
											colorScheme={'teal'}
											size={'sm'}
											fontWeight="black"
											fontSize={'2xl'}
										>
											+
										</Button>
									</Flex>

									<Text
										textAlign={'left'}
										color={useColorModeValue(
											'gray.700',
											'gray.400',
										)}
										px={3}
										fontSize="sm"
									>
										Actress, musician, songwriter and
										artist. PM for work inquires or{' '}
										<Link href={'#'} color={'blue.400'}>
											#tag
										</Link>{' '}
										me in your posts
									</Text>
								</Box>
							</Box>
							<Box textAlign={'left'}>
								<Box
									// maxW={'520px'}
									w={'full'}
									bg={useColorModeValue(
										'white',
										'gray.900',
									)}
									rounded={'lg'}
									py={3}
									px={1}
									textAlign={'center'}
								>
									<Flex
										justifyContent={'space-between'}
										alignItems="flex-start"
									>
										<Flex alignItems={'flex-start'}>
											<Avatar
												size={'md'}
												src={
													'https://substackcdn.com/image/fetch/w_1272,c_limit,f_webp,q_auto:best,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F887ebe8a-c4e3-48af-97e7-5d3897cbb1c7_1280x404.png'
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
													Vancouver Tech Journal
												</Heading>
												<Text
													fontWeight={600}
													color={'gray.500'}
													mb={4}
													textAlign="left"
													fontSize={'sm'}
												>
													By William Johnson
												</Text>
											</VStack>
										</Flex>
										<Button
											colorScheme={'teal'}
											size={'sm'}
											fontWeight="black"
											fontSize={'2xl'}
										>
											+
										</Button>
									</Flex>

									<Text
										textAlign={'left'}
										color={useColorModeValue(
											'gray.700',
											'gray.400',
										)}
										px={3}
										fontSize="sm"
									>
										We uncover and tell the stories that
										matter in Vancouver's tech ecosystem.
										Subscribe to our free twice-weekly
										newsletter.
									</Text>
								</Box>
							</Box>
							<Box textAlign={'left'}>
								<Box
									// maxW={'520px'}
									w={'full'}
									bg={useColorModeValue(
										'white',
										'gray.900',
									)}
									rounded={'lg'}
									py={3}
									px={1}
									textAlign={'center'}
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
													Not the Boring Stuff
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
										<Button
											colorScheme={'teal'}
											size={'sm'}
											fontWeight="black"
											fontSize={'2xl'}
										>
											+
										</Button>
									</Flex>

									<Text
										textAlign={'left'}
										color={useColorModeValue(
											'gray.700',
											'gray.400',
										)}
										px={3}
										fontSize="sm"
									>
										Not a regular boring tech newsletter,
										focused on the interesting news
										happening in the Africa tech ecosystem (
										Mostly 9ja tech twitter) + giveaway
										updates before they get to the public.
									</Text>
								</Box>
							</Box>
						</VStack>
					</Box>
				</div>
			</Flex>
		</div>
	);
}

export default Explore;
