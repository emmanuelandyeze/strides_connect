import { Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
	return (
		<div>
			<Button as={Link} to="/app">
				Go to app
			</Button>
		</div>
	);
}

export default HomePage;
