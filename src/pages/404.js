import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import { graphql } from "gatsby"
import {fadeInDown} from './../animations/m-styled-animations'

import {FaLinkedin} from 'react-icons/fa'
import {FaMedium} from 'react-icons/fa'
import {Fa500px} from 'react-icons/fa'
import {FaDribbble} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {IoIosCamera} from 'react-icons/io'


const iconSize = 25;

const NotFoundPage = () => (
  <ErrorPageGrid>

		<HeaderTitle>
			<strong>Jude Park</strong>
			<hr style={{ marginBottom: '0em'}}></hr>
			Interaction Designer
		</HeaderTitle>

		<SiteSocial>
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
			Uh oh, this page was not found.
			<br/>
		</HeaderSubtitle>

	<MButton to="/">Go Back</MButton>
  </ErrorPageGrid>
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
	animation: ${fadeInDown} .5s;
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

export default NotFoundPage

const ErrorPageGrid = styled.div`
	display: grid;
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 1100px) [end] minmax(24px, 1fr);
	& > * {
		grid-column: center;
	}
	p {
		color: #a8a8a8;
	}
	h1 {
		padding-top: 120px;
		font-weight: 800;
		font-size: 45px;
		margin-bottom: 24px;
	}
`

const MButton = styled(Link)`
	border: 1px solid hsla(0, 0%, 0%, 0.3);
	color: hsla(0, 0%, 0%, 0.3);
	display: flex;
	padding: 5px 20px;
	border-radius: 2px;
	width: fit-content;
	animation: ${fadeInDown} 0.5s;
	&:hover {
		background: white;
		border-color: hsla(0, 0%, 0%, 0.8);
		color: hsla(0, 0%, 0%, 0.8);
	}
`;

const HeaderTitle = styled.p`
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
	margin-bottom: 40px;
	max-width: 350px;
	font-family: 'Spectral', serif,	-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 17px + (22 - 17) * (100vw - 400px) / (1300 - 400) );
	color: hsla(0, 0%, 0%, 0.8);
	letter-spacing: -.02em;
	line-height: 1.35;
	font-weight: bold;
	max-width: 400px;
	animation: ${fadeInDown} 0.5s;
	@media(max-width: 425px) {
		margin-top: 130px;
	}
`;