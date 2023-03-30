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
import Post from './Post';

function PostList() {
	return (
		<Stack spacing="4" maxWidth={'680px'}>
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
		</Stack>
	);
}

export default PostList;
