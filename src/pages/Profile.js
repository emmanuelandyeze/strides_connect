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
import Nav from '../components/SettingsNavbar';
import SimpleSidebar from '../components/SettingsSidebar';
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
import PostList from 'components/posts/PostList';
import ProfileNav from 'components/mobileNav/Profile';

function Profile() {
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
						pt="20"
						pb={'20'}
						pr={{ base: '5', md: '10' }}
						pl={{ base: '4', md: '10' }}
						align={'center'}
					>
						<ProfileNav />
						<Center mb={3}>
							<Box
								maxW={'680px'}
								w={'full'}
								bg={useColorModeValue('white', 'gray.900')}
								borderBottom="1px"
								borderBottomColor={'gray.600'}
								// rounded={'lg'}
								px={1}
								py={3}
								textAlign={'left'}
							>
								<Flex alignItems={'center'}>
									<Avatar
										size={'xl'}
										src={
											'https://trueme.co/wp-content/uploads/2015/12/steps.jpg'
										}
										alt={'Avatar Alt'}
										mb={4}
										pos={'relative'}
										_after={{
											content: '""',
											w: 4,
											h: 4,
											bg: 'blue.300',
											border: '2px solid white',
											rounded: 'full',
											pos: 'absolute',
											bottom: 0,
											right: 3,
										}}
									/>
									<VStack
										align={'left'}
										ml={'3'}
										spacing="1"
									>
										<Heading
											fontSize={'2xl'}
											fontFamily={'body'}
										>
											The Transformer
										</Heading>
										<Text
											fontWeight={600}
											color={'gray.500'}
											mb={4}
										>
											@the_transformer
										</Text>
										<Text
											fontWeight={400}
											color={'gray.500'}
											mb={4}
											fontSize="sm"
										>
											16.6k subscribers
										</Text>
									</VStack>
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
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna
									aliqua. Ut enim ad minim veniam, quis
									nostrud exercitation ullamco laboris nisi
									ut aliquip ex ea commodo consequat.
								</Text>

								<Stack mt={8} direction={'row'} spacing={4}>
									<Button
										flex={1}
										fontSize={'sm'}
										rounded={'full'}
										_focus={{
											bg: 'gray.200',
										}}
									>
										Message
									</Button>
									<Button
										flex={1}
										fontSize={'sm'}
										rounded={'full'}
										bg={'teal'}
										color={'white'}
										_hover={{
											bg: 'teal.500',
										}}
										boxShadow="2xl"
										_focus={{
											bg: 'teal.500',
										}}
									>
										Subscribe
									</Button>
								</Stack>
							</Box>
						</Center>
						<PostList />
					</Box>
				</div>
			</Flex>
		</div>
	);
}

export default Profile;
