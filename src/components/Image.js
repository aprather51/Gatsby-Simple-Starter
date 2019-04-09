import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Image = () => {
	const data = useStaticQuery(graphql`
		query Image {
			placeholderImage: file(relativePath: { eq: "HappyDude_Face.png" }) {
				childImageSharp {
					fluid(maxWidth: 300) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	return <Img fluid={data.placeholderImage.childImageSharp.fluid} />;
};

export default Image;
