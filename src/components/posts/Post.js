import {
	Avatar,
	Card,
	CardBody,
	CardHeader,
	Flex,
	Heading,
	Image,
	Link,
	Stack,
	Tag,
	Text,
	VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link as routerLink } from 'react-router-dom';

function Post() {
	return (
		<Card size={'sm'} rounded="lg">
			<CardHeader>
				<Link
					as={routerLink}
					to="/profile/@the_transformer"
				>
					<Flex alignItems={'center'}>
						<Avatar
							size={'sm'}
							src={
								'https://trueme.co/wp-content/uploads/2015/12/steps.jpg'
							}
							alt={'Avatar Alt'}
							pos={'relative'}
						/>

						<Heading
							fontSize={'sm'}
							fontFamily={'body'}
							textAlign="left"
							ml={'1'}
						>
							The Transformer
						</Heading>
					</Flex>
				</Link>
			</CardHeader>
			<CardBody>
				<Flex
					justifyContent={'space-between'}
					alignItems="flex-start"
				>
					<Link
						as={routerLink}
						to={'/posts/lslsajfksfjjkjk'}
						_focus={{ textDecoration: 'none' }}
					>
						<VStack align={'left'}>
							<Heading
								fontSize={'lg'}
								fontFamily={'body'}
								textAlign="left"
							>
								My Bet on Substack: Why Writers Like Me Want
								to Give Substack Our Money
							</Heading>
							<Text
								textAlign="left"
								fontSize={{
									base: 'xs',
									md: 'md',
								}}
							>
								We're kicking off our conference with Volley
								in Hayes Valley tomorrow. Our panelists have
								been making headlines. Also, fill out our AI
								survey. <br />
								<Tag mt={3}>Writing</Tag>
							</Text>
						</VStack>
					</Link>
					<Image
						height={{ base: '24', md: '36' }}
						width={{ base: '32', md: '48' }}
						rounded="lg"
						src="https://substackcdn.com/image/fetch/w_400,h_264,c_fill,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4dbc7aa9-c506-45e1-acc8-954b25279d79_1920x1080.png"
					/>
				</Flex>
			</CardBody>
		</Card>
	);
}

export default Post;
