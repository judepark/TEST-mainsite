import React from 'react'
import { graphql } from "gatsby"
import styled from 'styled-components'
import ProjectCard from '../components/ProjectCard';

import {fadeInUp} from './../animations/m-styled-animations'

import {FaLinkedin} from 'react-icons/fa'
import {FaMedium} from 'react-icons/fa'
import {Fa500px} from 'react-icons/fa'
import {FaDribbble} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {IoIosCamera} from 'react-icons/io'
import {FaEnvelope} from 'react-icons/fa'

import {Link} from 'gatsby'

const iconSize = 25;

const IndexPage = ({data}) => (
  <React.Fragment>
	  <PageGrid>
		<HeaderTitle>
			<strong>Jude Park</strong>
			<hr style={{ marginBottom: '0em'}}></hr>
			Interaction Designer
		</HeaderTitle>

		<SiteSocial>
			<li>
				<a href="https://github.com/MaxMcKinney" target="_blank">
					<FaEnvelope size={iconSize}/>
				</a>
			</li>
			<li>
				<a href="https://github.com/MaxMcKinney" target="_blank">
					<FaGithub size={iconSize}/>
				</a>
			</li>
			<li>
				<a href="https://www.linkedin.com/in/mckinneymax" target="_blank">
					<FaLinkedin size={iconSize}/>
				</a>
			</li>
			<li>
				<a href="https://dribbble.com/MaxMcKinney" target="_blank">
					<FaDribbble size={iconSize}/>
				</a>
			</li>
			<li>
				<a href="https://medium.com/@maxmckinney" target="_blank">
					<FaMedium size={iconSize}/>
				</a>
			</li>
			<li>
				<a href="https://twitter.com/timmaxmckinney" target="_blank">
					<FaTwitter size={iconSize}/>
				</a>
			</li>
			<li>
				<Link to="/photography" target="_blank">
					<IoIosCamera size={iconSize+6}/>
				</Link>
			</li>
		</SiteSocial>

		<HeaderSubtitle>
			<br/>
			UX & Interaction Designer /
			<br/>
			Researcher of all things fair /
			<br/>
			Pondering doodler /
		</HeaderSubtitle>
	</PageGrid>

	<PageGrid2>
		<ProjectCardGrid>

			{data.allMarkdownRemark.edges.map(({node}) => (
				<ProjectCard data={node} key={node.key}></ProjectCard>
			))}

		</ProjectCardGrid>
	</PageGrid2>
  </React.Fragment>
)

const SiteSocial = styled.ul`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	list-style: none;
	text-transform: uppercase;
	font-size: 0.7rem;
	font-weight: 500;
	letter-spacing: 1px;
	margin-right: 40px;
	margin-left: -20px;
	margin-bottom: 0px;
	animation: ${fadeInUp} .5s;
	/*width: 100%;*/
	li {
		margin: 0;
		padding: 0px 20px;
		a {
			font-size: 0.7rem;
			font-weight: 500;
			text-decoration: none;
			color: hsla(0, 0%, 0%, 0.3);
			transition: all 0.6s;
			&:hover {
				color: hsla(0, 0%, 0%, 0.80);
			}
		}
	}
	@media(max-width: 1155px) {
		margin-right: 0;
	}
	@media(max-width: 715px) {
		margin-right: 0;
	}
`
const PageGrid = styled.div`
	display: grid;
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 1100px) [end] minmax(24px, 1fr);
	& > * {
		grid-column: center;
	}
`
const PageGrid2 = styled.div`
	display: grid;
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 1100px) [end] minmax(24px, 1fr);
	& > * {
		grid-column: center;
	}
`

const HeaderTitle = styled.h1`
	font-family: 'Spectral', serif,	-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 17px + (22 - 17) * (100vw - 400px) / (1300 - 400) );
	color: hsla(0, 0%, 0%, 0.80);
	line-height: 1.35;
	font-weight: normal;
	margin-bottom: 20px;
	max-width: 400px;
	margin-top: 190px;
	@media(max-width: 425px) {
		margin-top: 130px;
	}
`;

const HeaderSubtitle = styled.h3`
	margin-bottom: 170px;
	max-width: 350px;
	font-family: 'Spectral', serif,	-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 17px + (22 - 17) * (100vw - 400px) / (1300 - 400) );
	color: hsla(0, 0%, 0%, 0.3);
	letter-spacing: -.02em;
	line-height: 1.35;
	font-weight: normal;
	max-width: 400px;
	animation: ${fadeInUp} 0.5s;
	@media(max-width: 425px) {
		margin-top: 130px;
	}
`;

const ProjectCardGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(490px, 1fr));
	grid-gap: 40px;
	animation: ${fadeInUp} 1s;
	@media (max-width: 500px) {
		grid-template-columns: 1fr;
	}
`;


export default IndexPage

export const query = graphql`
query ProjectQuery {
	allMarkdownRemark(sort: {fields: [frontmatter___sortDate], order: DESC}) {
		edges {
		  node {
			fields {
				slug
			}
			frontmatter {
			  title
			  projectShortBrief
			  themeColor
			  accentColor
			  image {
				childImageSharp {
				  fluid(maxWidth: 900) {
					...GatsbyImageSharpFluid
				  }
				}
			  }
			}
		  }
		}
	  }
  }
`