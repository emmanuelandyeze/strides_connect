import {
	Button,
	Card,
	CardFooter,
	useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import {
	BiCalendarEvent,
	BiChat,
	BiHome,
	BiLike,
	BiShare,
} from 'react-icons/bi';
import { MdOutlineExplore } from 'react-icons/md';
import { BsPeople, BsPersonCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks/auth';

export default function ExploreNav() {
	const { user, isLoading: authLoading } = useAuth();
	return (
		<Card
			maxWidth={'680px'}
			display={{ base: 'block', md: 'none' }}
			zIndex="1000"
		>
			<CardFooter
				pos="fixed"
				bottom={0}
				justify="space-between"
				flexWrap="wrap"
				rounded={'none'}
				// sx={{
				// 	'& > button': {
				// 		minW: '100px',
				// 	},
				// }}
				bg={useColorModeValue('white', 'gray.900')}
				w={{ base: '94%', md: '680px' }}
			>
				{!authLoading && !user ? (
					<>
						<Button
							flex="1"
							variant="ghost"
							as={Link}
							to="/login"
						>
							<BiHome size={30} />
						</Button>
						<Button
							flex="1"
							variant="ghost"
							as={Link}
							to="/login"
						>
							<BsPeople size={30} />
						</Button>
						<Button
							flex="1"
							variant="ghost"
							as={Link}
							to="/explore"
							colorScheme={'teal'}
						>
							<MdOutlineExplore size={30} />
						</Button>
						<Button
							flex="1"
							variant="ghost"
							as={Link}
							to="/login"
						>
							<BiCalendarEvent size={30} />
						</Button>
						<Button
							flex="1"
							variant="ghost"
							as={Link}
							to="/login"
						>
							<BsPersonCircle size={30} />
						</Button>
					</>
				) : (
					<>
						<Button
							flex="1"
							variant="ghost"
							as={Link}
							to="/app"
						>
							<BiHome size={30} />
						</Button>
						<Button
							flex="1"
							variant="ghost"
							as={Link}
							to="/app/community"
						>
							<BsPeople size={30} />
						</Button>
						<Button
							flex="1"
							variant="ghost"
							as={Link}
							to="/explore"
							colorScheme={'teal'}
						>
							<MdOutlineExplore size={30} />
						</Button>
						<Button
							flex="1"
							variant="ghost"
							as={Link}
							to="/app/events"
						>
							<BiCalendarEvent size={30} />
						</Button>
						<Button
							flex="1"
							variant="ghost"
							as={Link}
							to="/profile/@the_transformer"
						>
							<BsPersonCircle size={30} />
						</Button>
					</>
				)}
			</CardFooter>
		</Card>
	);
}
