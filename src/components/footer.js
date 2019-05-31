import React from 'react'
import styled from 'styled-components'
import {fadeInUp} from '../animations/m-styled-animations'

const Footer = () => {
  return (
	<PageFooter>
		<div>
      <br />
      <footer>
       © {new Date().getFullYear()} Jude Park
       <br />
				{` `}
        </footer>
        </div>

	</PageFooter>
  )
}

const PageFooter = styled.div`
	display: flex;
	font-family: 'Product Sans', sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 17px + (22 - 17) * (100vw - 400px) / (1300 - 400) );
	color: hsla(0, 0%, 0%, 0.80);
  padding: 0px 20px;
  margin: 0 auto;
	margin-top: 100px;
	margin-bottom: 30px;
  flex-direction: row;
  align-items: flex-end;
	justify-content: flex-end;
	animation: ${fadeInUp} 1s;

	@media(max-width: 1155px) {
		padding: 0 24px;
	}
	
	@media(max-width: 715px) {
		flex-direction: column;
		justify-content: flex-end;
		align-items: flex-end;
		margin-top: 50px;
		padding: 0 24px;
	}

`;

export default Footer;