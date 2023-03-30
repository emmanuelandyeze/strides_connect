import React, { ReactNode } from 'react';
import {
	IconButton,
	Box,
	CloseButton,
	Flex,
	Icon,
	useColorModeValue,
	Link,
	Drawer,
	DrawerContent,
	Text,
	useDisclosure,
	BoxProps,
	FlexProps,
} from '@chakra-ui/react';
import {
	FiHome,
	FiTrendingUp,
	FiCompass,
	FiStar,
	FiSettings,
	FiMenu,
} from 'react-icons/fi';
import { Link as routerLink } from 'react-router-dom';
import { BsPeople, BsPersonCircle } from 'react-icons/bs';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import { useColorMode } from '@chakra-ui/react';

interface LinkItemProps {
	name: string;
	icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
	// { name: 'Home', icon: FiHome },
	{ name: 'Community', icon: BsPeople, link: '/community' },
	{ name: 'Explore', icon: FiCompass, link: '/explore' },
	{
		name: 'Events',
		icon: FaRegCalendarAlt,
		link: 'events',
	},
	{ name: 'Settings', icon: FiSettings, link: 'settings' },
];

export default function SimpleSidebar({
	children,
}: {
	children: ReactNode,
}) {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box
			minH="100vh"
			bg={useColorModeValue('gray.100', 'gray.900')}
		>
			<SidebarContent
				onClose={() => onClose}
				display={{ base: 'none', md: 'block' }}
			/>
			<Drawer
				autoFocus={false}
				isOpen={isOpen}
				placement="left"
				onClose={onClose}
				returnFocusOnClose={false}
				onOverlayClick={onClose}
				size="full"
			>
				<DrawerContent>
					<SidebarContent onClose={onClose} />
				</DrawerContent>
			</Drawer>
			{/* mobilenav */}
			<MobileNav
				display={{ base: 'flex', md: 'none' }}
				onOpen={onOpen}
			/>
			<Box ml={{ base: 0, md: 60 }}>{children}</Box>
		</Box>
	);
}

interface SidebarProps extends BoxProps {
	onClose: () => void;
}

const SidebarContent = ({
	onClose,
	...rest
}: SidebarProps) => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Box
			bg={useColorModeValue('white', 'gray.900')}
			borderRight="1px"
			borderRightColor={useColorModeValue(
				'gray.200',
				'gray.700',
			)}
			w={{ base: 'full', md: 60 }}
			pos="fixed"
			h="full"
			{...rest}
		>
			<Flex
				h="20"
				alignItems="center"
				mx="8"
				justifyContent="space-between"
			>
				{/* <Text
					fontSize="lg"
					// fontFamily="monospace"
					fontWeight="bold"
				>
					Strides Connect
				</Text> */}

				{colorMode === 'dark' ? (
					<img
						style={{ marginLeft: '-2rem', height: '5rem' }}
						src={'/favicon.png'}
						alt=""
					/>
				) : (
					<img
						style={{ marginLeft: '-1rem', height: '4rem' }}
						src={'/logo192.png'}
						alt=""
					/>
				)}

				<CloseButton
					display={{ base: 'flex', md: 'none' }}
					onClick={onClose}
				/>
			</Flex>

			<NavItem icon={FiHome} as={routerLink} to="/app">
				Home
			</NavItem>
			<NavItem
				icon={BsPeople}
				as={routerLink}
				to="/app/community"
			>
				Community
			</NavItem>
			<NavItem
				icon={FiCompass}
				as={routerLink}
				to="/explore"
			>
				Explore
			</NavItem>
			<NavItem
				icon={FaRegCalendarAlt}
				as={routerLink}
				to="/app/events"
			>
				Events
			</NavItem>
			<NavItem
				icon={BsPersonCircle}
				as={routerLink}
				to="/profile/@the_transformer"
				fontWeight={'bolder'}
				fontSize="lg"
			>
				Profile
			</NavItem>
		</Box>
	);
};

interface NavItemProps extends FlexProps {
	icon: IconType;
	children: ReactText;
}
const NavItem = ({
	icon,
	children,
	...rest
}: NavItemProps) => {
	return (
		<Link
			href="#"
			style={{ textDecoration: 'none' }}
			_focus={{ boxShadow: 'none' }}
		>
			<Flex
				align="center"
				p="4"
				mx="10"
				my="2"
				borderRadius="lg"
				role="group"
				cursor="pointer"
				_hover={{
					bg: 'gray.400',
					color: 'white',
				}}
				{...rest}
			>
				{icon && (
					<Icon
						mr="4"
						fontSize="16"
						_groupHover={{
							color: 'white',
						}}
						as={icon}
					/>
				)}
				{children}
			</Flex>
		</Link>
	);
};

interface MobileProps extends FlexProps {
	onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
	return (
		<Flex
			ml={{ base: 0, md: 60 }}
			px={{ base: 4, md: 24 }}
			height="20"
			alignItems="center"
			bg={useColorModeValue('white', 'gray.900')}
			borderBottomWidth="1px"
			borderBottomColor={useColorModeValue(
				'gray.200',
				'gray.700',
			)}
			justifyContent="flex-start"
			{...rest}
		>
			<IconButton
				variant="outline"
				onClick={onOpen}
				aria-label="open menu"
				icon={<FiMenu />}
			/>

			<Text
				fontSize="2xl"
				ml="8"
				fontFamily="monospace"
				fontWeight="bold"
			>
				Logo
			</Text>
		</Flex>
	);
};
