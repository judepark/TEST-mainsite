import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const ProjectCard = (props) => {
  return (
	<Link to={props.data.fields.slug}>
		<ProjectCardContainer>
			<Img className="project-card-image" fluid={props.data.frontmatter.image.childImageSharp.fluid} alt="Project Image"/>
			<ReadMore theme={props.data.frontmatter.accentColor}><h4>{props.data.frontmatter.title}</h4>
			<br/>
			<p>{props.data.frontmatter.projectShortBrief}</p></ReadMore>
				
				
		</ProjectCardContainer>
	</Link>
  )
}

// TODO: Create a style component wrapper for the gatsby-image component

const ProjectCardContainer = styled.div`
		display: grid;
		width:100%;
		grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 1100px) [end] minmax(24px, 1fr);
		& > * {
			grid-column: center;
		}
	.project-card-image {
		grid-column: 1;
		padding: 0;
		height: 55px;
		width: 55px;
		object-fit: cover;
		margin: 0;
		border-radius: 4px;
		align-self: center;
	}
	h4 {
		font-family: 'Product Sans', sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		font-size: calc( 19px + (25 - 19) * (100vw - 400px) / (1300 - 400) );
		color: hsla(0, 0%, 0%, 0.80);
		display: inline-block;
		line-height: 1.35;
		font-weight: normal;
		margin-left: 0px;
		margin-top: 5px;
		margin-bottom: 0px;
		font-weight:normal;
	}

	p {
		font-family: 'Crimson Text', serif,	-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		font-size: calc( 19px + (25 - 19) * (100vw - 400px) / (1300 - 400) );
		letter-spacing: -.02em;
		color: hsla(0, 0%, 0%, 0.30);
		display: inline-block;
		line-height: 1.35;
		margin-left: 0px;
		margin-top: 0px;
		margin-bottom: 0px;
	}
	&:hover {
		opacity: 1;
	}
	/* This syntax is used to reference another styled component */
	&:hover ${ReadMore}:after, &:focus ${ReadMore}:after, &:active ${ReadMore}:after {
		right: 0;
	}
	@media(max-width: 500px) {
		grid-template-columns: 10% 1fr;
	}
`;

const ReadMore = styled.span`
	margin-top: 0px;
	font-weight: 500;
	margin-left: 50px;
	margin-bottom: 5px;
	color: white;
	display: inline-block;
	opacity: 1;
	position: relative;
	transition: opacity 0.3s;
	--accent-color: ${props => props.theme};
	&:after {
		content: '';
		position: absolute;
		background: var(--accent-color);
		left: 0;
		right: 100%;
		bottom: -5px;
		height: 1.5px;
		transition: all 0.3s;
		max-width: 100%;
	}
`;

export default ProjectCard;
