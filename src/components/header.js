import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import {fadeIn} from '../animations/m-styled-animations'

import logo from './../assets/img/logo.png'


const Header = () => (
	<Navmenu>
		<SiteLogoContainer>
			<Link to="/">
				<SiteLogo
					src={logo}
				/>
			</Link>
		</SiteLogoContainer>


	</Navmenu>
)

const Navmenu = styled.div`
	width: 100%;
	display: flex;
	height: 60px;
	margin-top: 18px;
	padding: 10px 20px;
	align-items: center;
	position: absolute;
	top: 0;
	z-index: 2;
	animation: ${fadeIn} 1.3s;
`

const SitePages = styled.ul`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	list-style: none;
	text-transform: uppercase;
	font-size: 0.7rem;
	font-weight: 500;
	letter-spacing: 1px;
	width: 100%;
	margin-left: 0px;
	margin-bottom: 0px;
	li {
		margin: 0;
		padding: 0px 20px;
		a {
			font-size: 0.7rem;
			font-weight: 500;
			text-decoration: none;
			color: white;
			transition: all 0.6s;
			display: flex;
			&:hover {
				opacity: 0.6;
			}
		}
	}
	span {
		text-transform: none;
		margin-right: 12px;
		font-weight: 400;
	}
	@media(max-width: 1155px) {
		margin-bottom: 0;
	}
`
const ListSeperator = styled.li`
	opacity: 0.5;
	display: flex;
	@media(max-width: 715px) {
		display: none;
	}
`;

const SiteLogo = styled.img`
	width: 45px;
    height: auto;
    margin-right: 17px;
	display: block;
	padding-top: 30px;
	paddding-bottom: 30px;
`
const SiteLogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
	flex-grow: 1;
	padding: 50px 0px 0px 0px;
	@media (max-width: 1155px) {
		padding: 0px;
	}
`

export default Header
