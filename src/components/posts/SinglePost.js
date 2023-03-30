import { AddIcon } from '@chakra-ui/icons';
import {
	Avatar,
	Badge,
	Button,
	Card,
	CardFooter,
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
import { BiLike, BiShare, BiChat } from 'react-icons/bi';
import { Link as routerLink } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import Nav from 'components/ExploreNavbar';
import SimpleSidebar from 'components/ExploreSidebar';

function SinglePost() {
	const { isOpen, onOpen, onClose } = useDisclosure();
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
						py="24"
						pr={{ base: '5', md: '10' }}
						pl={{ base: '4', md: '10' }}
						align="center"
					>
						<VStack
							align={'left'}
							maxWidth="680px"
							borderBottom={'1px'}
						>
							<Flex
								alignItems={'center'}
								mb={3}
								as={routerLink}
								to="/profile/@the_transformer"
							>
								<Avatar
									size={'sm'}
									src={
										'https://trueme.co/wp-content/uploads/2015/12/steps.jpg'
									}
									alt={'Avatar Alt'}
									pos={'relative'}
								/>
								<Text textAlign="left" ml={2}>
									The Transformer
								</Text>
							</Flex>

							<Heading
								fontSize={{ base: 'xl', md: '2xl' }}
								fontFamily={'body'}
								textAlign="left"
							>
								My Bet on Substack: Why Writers Like Me Want
								to Give Substack Our Money
							</Heading>
							<Text
								textAlign="left"
								fontSize={{
									base: 'sm',
									md: 'md',
								}}
							>
								We're kicking off our conference with Volley
								in Hayes Valley tomorrow. Our panelists have
								been making headlines. Also, fill out our AI
								survey. <br />
								<Text my={3}>Yesterday at 11a.m</Text>
							</Text>
						</VStack>
						<Image
							height={{ base: '20rem', md: '20rem' }}
							width={{ base: 'full', md: 'full' }}
							objectFit="contain"
							maxWidth="680px"
							rounded="lg"
							my={3}
							src="https://substackcdn.com/image/fetch/w_400,h_264,c_fill,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4dbc7aa9-c506-45e1-acc8-954b25279d79_1920x1080.png"
						/>
						<Text textAlign={'left'} maxWidth="680px">
							When I left Bloomberg two-and-a-half years ago
							during the pandemic to launch this newsletter,
							I was betting on myself, but I was also making
							a bet on Substack. As a reporter, I have
							always strived to remain neutral. That’s meant
							that in the best case scenario, when I have
							identified a cool early-stage startup, I have
							built some cred with a prescient story. But
							I’ve never tried to invest in startups because
							I want readers to know that I’m giving them my
							unbiased opinion, not pushing my investments.
							Back in 2020, I made a different kind of bet
							on a startup. Working from home during the
							pandemic, I saw a trend that finally applied
							to me. Instead of writing a story about it, I
							decided to actually seize on the insight and
							hop on a promising new platform. I called up
							fellow tech writer Casey Newton to tell him
							that I was going to start a Substack. He told
							me that he was about to announce a Substack of
							his own. <br />A few days later, the New York
							Times dropped a trend piece about writers
							starting Substacks with his face on it. Then,
							a month later, I quit my job to launch this
							newsletter. <br />
							<br />A year later, in 2021, Substack raised
							$65 million at a $650 million valuation in a
							round led by existing investor Andreessen
							Horowitz. The newsletter economy was riding
							high. But the sense of inevitability didn’t
							last long. By 2022, startup valuations
							cratered — as I have documented in this
							newsletter. Substack scuttled an attempted
							funding round and laid off 14% of its staff.
							Even so, my business continued to grow. Last
							year, it brought in about $310,000 in net
							revenue. While the fundraising environment is
							tough for startups, Substack has felt like
							it’s on a tear lately. It’s released chat,
							podcast and video features, an app, and a
							recommendation system. Last year, thanks to
							Substack’s recommendations feature my free
							signups began to climb more rapidly. I reached
							50,000 total signups early this year.
							Newcomer’s free + paid subscriber list crossed
							50,000 in January So when I sat down with
							Substack co-founder Hamish McKenzie and
							another Substack employee last week in San
							Francisco, I was effusive. I told them how
							appreciative I was for everything Substack had
							done for me so far. None of this would have
							happened without them. Monday, Substack sent
							me an unexpected piece of news: I had the
							option to make a small investment in the
							company at a $585 million valuation — the
							pre-money price of the 2021 fundraising round.
							On the crowdfunding platform Wefunder,
							Substack is raising $2 million from writers
							and paid Substack subscribers. I’ve decided to
							invest $5,000.1 It's a minuscule sum of money
							in the world of startup investing. I’m already
							compromised when it comes to Substack. They’ve
							made my job possible. And while I already have
							plenty of financial exposure to Substack’s
							performance just by dint of running my
							business on Substack’s platform, I’m eager to
							have a chance to show my support. Upgrade to
							paid As part of raising the crowdfunding
							money, Substack will have to reveal its
							audited financials. Until then, Substack says
							that its writers have 35 million monthly
							active subscribers and 2 million paid
							subscriptions. <br /> Readers have paid
							writers on Substack more than $300 million
							since Substack’s founding. That total includes
							Substack’s cut, which is 10%. That 10% fee is
							my real investment in Substack, of course.
							People sometimes ask me why I’m on Substack
							instead of a cheaper publishing platform. In
							the early days, my answer was because I could
							get Substack on the phone and get their
							advice. Even though that’s still true, my
							answer shifted to their recommendation feature
							once it started powering my free signups
							growth. But really, I’m on Substack because
							there’s a sense that there’s always a new
							feature on the way — that suddenly my business
							could get better because they had a great
							idea. subscriptions. <br /> <br /> Readers
							have paid writers on Substack more than $300
							million since Substack’s founding. That total
							includes Substack’s cut, which is 10%. That
							10% fee is my real investment in Substack, of
							course. People sometimes ask me why I’m on
							Substack instead of a cheaper publishing
							platform. In the early days, my answer was
							because I could get Substack on the phone and
							get their advice. Even though that’s still
							true, my answer shifted to their
							recommendation feature once it started
							powering my free signups growth. But really,
							I’m on Substack because there’s a sense that
							there’s always a new feature on the way — that
							suddenly my business could get better because
							they had a great idea.
						</Text>
						<Card maxWidth={'680px'}>
							<CardFooter
								pos="fixed"
								bottom={0}
								justify="space-between"
								flexWrap="wrap"
								rounded={'none'}
								sx={{
									'& > button': {
										minW: '100px',
									},
								}}
								bg={useColorModeValue('white', 'gray.900')}
								w={{ base: '94%', md: '680px' }}
							>
								<Button
									flex="1"
									variant="ghost"
									leftIcon={<BiLike />}
								>
									0
								</Button>
								<Button
									flex="1"
									variant="ghost"
									leftIcon={<BiChat />}
								>
									0 Comments
								</Button>
								<Button
									flex="1"
									variant="ghost"
									leftIcon={<BiShare />}
								>
									Share
								</Button>
							</CardFooter>
						</Card>
					</Box>
				</div>
			</Flex>
		</div>
	);
}

export default SinglePost;
