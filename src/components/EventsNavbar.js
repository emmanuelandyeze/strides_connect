import { ReactNode } from 'react';
import {
	Box,
	Flex,
	Avatar,
	Link,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	useColorModeValue,
	Stack,
	useColorMode,
	Center,
	Text,
	Code,
	VStack,
} from '@chakra-ui/react';
import {
	MoonIcon,
	Search2Icon,
	SunIcon,
} from '@chakra-ui/icons';
import {
	Input,
	InputGroup,
	InputLeftElement,
} from '@chakra-ui/react';
import { useAuth, useLogout } from 'hooks/auth';
import { LOGIN } from 'lib/routes';
import { Link as routerLink } from 'react-router-dom';

const NavLink = ({ children }: { children: ReactNode }) => (
	<Link
		px={2}
		py={1}
		rounded={'md'}
		_hover={{
			textDecoration: 'none',
			bg: useColorModeValue('gray.200', 'gray.700'),
		}}
		href={'#'}
	>
		{children}
	</Link>
);

export default function Nav() {
	const { colorMode, toggleColorMode } = useColorMode();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { logout, isLoading } = useLogout();
	const { user, isLoading: authLoading } = useAuth();

	return (
		<>
			<Box
				bg={useColorModeValue('white', 'gray.900')}
				pr={{ base: '5', md: '10' }}
				pl={{ base: '4', md: '10' }}
				// ml={{ base: '0', md: '10' }}
				borderBottom="1px"
				borderBottomColor={useColorModeValue(
					'gray.200',
					'gray.700',
				)}
				pos="fixed"
				w={{ base: 'full', md: '85%' }}
			>
				<Flex
					h={16}
					alignItems={'center'}
					justifyContent={'space-between'}
				>
					<Box>
						<Text fontSize={'lg'} fontWeight="bold">
							Events
						</Text>{' '}
					</Box>

					<Box display={{ base: 'none', md: 'block' }}>
						<InputGroup>
							<InputLeftElement
								pointerEvents="none"
								children={<Search2Icon color="gray.300" />}
							/>
							<Input
								type="text"
								w="600px"
								style={{ borderRadius: '15px' }}
								placeholder="Search for publications, communities and events"
							/>
						</InputGroup>
					</Box>

					<Flex alignItems={'center'}>
						<Stack direction={'row'} spacing={7}>
							<Button onClick={toggleColorMode}>
								{colorMode === 'light' ? (
									<MoonIcon />
								) : (
									<SunIcon />
								)}
							</Button>

							{!isLoading && !user ? (
								<div></div>
							) : (
								<Menu>
									<MenuButton
										as={Button}
										rounded={'full'}
										variant={'link'}
										cursor={'pointer'}
										minW={0}
									>
										<Avatar
											size={'sm'}
											src={user?.avatar}
											border="1px"
											name={user.username}
										/>
									</MenuButton>
									<MenuList alignItems={'center'}>
										<br />
										<Center>
											<Avatar
												name={user.username}
												size={'2xl'}
												src={user?.avatar}
												border="1px"
												_hover={{
													cursor: 'pointer',
													opacity: '0.8',
												}}
											/>
										</Center>
										<br />
										<Center>
											<VStack>
												<Text>{user?.username}</Text>
												<Code>{user?.tag}</Code>
											</VStack>
										</Center>
										<br />
										<MenuDivider />
										<MenuItem>Your Profile</MenuItem>
										<MenuItem>Account Settings</MenuItem>
										<MenuItem
											onClick={logout}
											isLoading={isLoading}
											color="red"
										>
											Logout
										</MenuItem>
									</MenuList>
								</Menu>
							)}
						</Stack>
					</Flex>
				</Flex>
			</Box>
		</>
	);
}
