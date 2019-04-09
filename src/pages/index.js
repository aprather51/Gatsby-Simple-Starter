import config from 'assets/utils/profile';
import React from 'react';
import Helmet from 'react-helmet';

import { Img, Layout, SEO } from 'components';

import { Container, Flex, ImgWrapper } from 'commons';

import { Link } from 'gatsby';

export default () => (
	<Layout>
		<SEO
			title={`${config.title} - Home`}
			keywords={[ `homepage`, `page`, `new` ]}
		/>
		<Helmet>
			<title>{`${config.title} - Home`}</title>
			<link rel="canonical" href={`${config.url}/`} />
		</Helmet>
		<Container>
			<Flex justify={'center'} items={'center'} direction={'column'}>
				<h1>Simple Starter Template</h1>
				<ImgWrapper maxWidth={'500px'} margin={'0 auto'}>
					<Img />
				</ImgWrapper>
				<Link to="/page-2">Page 2</Link>
			</Flex>
		</Container>
	</Layout>
);
