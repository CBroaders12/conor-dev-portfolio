import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import Landing from '../components/Landing/Landing';

const IndexPage = ({ data }) => {
	console.log(data);
	return (
		<Layout>
			<Landing data={data} />
		</Layout>
	);
};

export const query = graphql`
	query HomePageQuery {
		contentfulPageHome {
			headshot {
				file {
					url
					fileName
				}
			}
			job
			name
			bioText {
				childMarkdownRemark {
					html
				}
			}
		}
	}
`;

export default IndexPage;
