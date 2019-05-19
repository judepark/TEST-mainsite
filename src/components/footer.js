import React from 'react'
import styled from 'styled-components'
import {fadeIn} from '../animations/m-styled-animations'

const Footer = () => {
  return (
	<PageFooter>
		<div>
      <br />
			<hr style={{ marginBottom: '0em'}}></hr>
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
  padding: 0px 20px;
  margin: 0 auto;
	margin-top: 100px;
	margin-bottom: 30px;
  flex-direction: row;
  align-items: flex-end;
	justify-content: flex-end;
	animation: ${fadeIn} 1s;

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