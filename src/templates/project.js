import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {fadeInDown, fadeInUp, fadeInScaleDown} from './../animations/m-styled-animations'

import LiveContentCard from '../components/LiveContentCard'

export default function Template({ data }) {
	return (
		<React.Fragment>

		<Helmet title={data.site.siteMetadata.title + ' | ' + data.markdownRemark.frontmatter.title}>
            <meta name="theme-color" content={data.markdownRemark.frontmatter.themeColor}/>
		</Helmet>

		<ProjectHeader themeColor={data.markdownRemark.frontmatter.themeColor}>
			<Img style={{position: 'static', top: 0, left: 0, width: '100%', height: `100%`}} fluid={data.markdownRemark.frontmatter.image.childImageSharp.fluid}/>
			<ProjectPostTitle>{data.markdownRemark.frontmatter.title}</ProjectPostTitle>
		</ProjectHeader>

		<ProjectContentGrid>

			<ProjectDetails>
				<div>
					<ProjectDetailsTitle>
					WHAT IT IS
					</ProjectDetailsTitle>
					<h5>{data.markdownRemark.frontmatter.projectWHATITIS}</h5>
				</div>
				<div>
					<ProjectDetailsTitle>
					WHAT IT'S BEST FOR
					</ProjectDetailsTitle>
					<h5>{data.markdownRemark.frontmatter.projectWHATITSBESTFOR}</h5>
				</div>
			</ProjectDetails>

			<ProjectDetails>
				<div>
					<ProjectDetailsTitle>
					CLIENT
					</ProjectDetailsTitle>
					<h5>{data.markdownRemark.frontmatter.projectCLIENT}</h5>
				</div>
				<div>
					<ProjectDetailsTitle>
					PLATFORM
					</ProjectDetailsTitle>
					<h5>{data.markdownRemark.frontmatter.projectPLATFORM}</h5>
				</div>
				<div>
					<ProjectDetailsTitle>
					BUILD
					</ProjectDetailsTitle>
					<h5>{data.markdownRemark.frontmatter.projectBUILD}</h5>
				</div>
				<div>
					<ProjectDetailsTitle>
					LINKS
					</ProjectDetailsTitle>
					<h5>{data.markdownRemark.frontmatter.projectLINKS}</h5>
				</div>
			</ProjectDetails>



			<ProjectDetails>
				<div>
					<ProjectDetailsTitle>
					MY ROLE
					</ProjectDetailsTitle>
					<h5>{data.markdownRemark.frontmatter.projectROLE}</h5>
				</div>
				<div>
					<ProjectDetailsTitle>
					RESULTS
					</ProjectDetailsTitle>
					<h5>{data.markdownRemark.frontmatter.projectRESULTS}</h5>
				</div>
			</ProjectDetails>

			<div>
					<br />
					<br />
					<h2>Brief</h2>
					<p>{data.markdownRemark.frontmatter.projectBrief}</p>
			</div>

			<h2>Case Study</h2>

			<div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />

			{data.markdownRemark.frontmatter.showLiveContent && 
				<LiveContentCard thumbnail={data.markdownRemark.frontmatter.image.childImageSharp.fluid.src} title={data.markdownRemark.frontmatter.title} url={data.markdownRemark.frontmatter.url} themeColor={data.markdownRemark.frontmatter.accentColor}/>
			}
			

		</ProjectContentGrid>

		<BackgroundColor themeColor={data.markdownRemark.frontmatter.themeColor}/>
		</React.Fragment>
	)
}

const ProjectHeader = styled.div`
	height: 500px;
	display: flex;
	justify-content: left;
	align-items: center;
	position: relative;
	padding: 0px 24px;


	& img {
		animation: ${fadeInDown} 1s;
		text-align: right;
		max-width:100%;
		padding: 0px 0px 0px 0px;
	}

	&:after {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, ${props => props.themeColor} 100%);
	}

	@media (max-width: 715px) {
		height: 500px;
	}
`;

const ProjectPostTitle = styled.h1`
	font-family: 'Product Sans', sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 40px + (45 - 40) * (100vw - 400px) / (1300 - 400) );
	color: hsla(0, 0%, 0%, 0.80);
	line-height: 1.35;
	padding: 10px 15px 10px 15px;
	font-weight: bold;
	text-align: left;
	background-color: white;
	display:block;
	z-index: 5;
	animation: ${fadeInScaleDown} 1.5s ease-out;

	@media(max-width: 715px) {
		font-size: 2.2rem;
		line-height: 1;
	}
`;

const ProjectContentGrid = styled.div`
	display: grid;
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 900px) [end] minmax(24px, 1fr);
	animation: ${fadeInUp} 1.8s;

	& > * {
		grid-column: center;
	}
	p {
		opacity: 0.85;
	}
`;

const ProjectDetails = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	margin-bottom: -20px;
	background: transparent;

	div {
		padding-right: 0px;
		padding-bottom: 0px;
		width: 50%;
	}

	@media(max-width: 1155px) {
		padding: 0px;
    	margin-bottom: -20px;

		div {
			padding-right: 0px;
			padding-bottom: 0px;
			width: 50%;
		}
		div:last-child {
			width: 50%;
		}
	}
`;

const ProjectDetailsTitle = styled.div`
	font-family: 'Product Sans', sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 12px + (17 - 12) * (100vw - 400px) / (1300 - 400) );
	color: hsla(0, 0%, 0%, 0.3);
	line-height: 1.35;
	font-weight: normal;
	margin-bottom: 0px;
	animation: ${fadeInDown} 0.5s;
	@media(maxs-width: 425px) {
		margin-top: 130px;
	}
`;

const BackgroundColor = styled.div`
	position: fixed;
	z-index: -10;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	background-color: ${props => props.themeColor};
`;

export const query = graphql`
	query ProjectBySlug($slug: String!) {
		site {
			siteMetadata {
				title
			}
		}
		markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
				projectWHATITIS
				projectWHATITSBESTFOR
				projectCLIENT
				projectPLATFORM
				projectBUILD
				projectLINKS
				projectROLE
				projectRESULTS
				projectBrief
				themeColor
				accentColor
				url
				showLiveContent
				image {
					childImageSharp {
					  fluid(maxWidth: 1600) {
						...GatsbyImageSharpFluid
					  }
					}
				  }
			}
			html
			fields {
				slug
			}
		}
	}
`
