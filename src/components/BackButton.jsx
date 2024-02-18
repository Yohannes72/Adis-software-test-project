import React from 'react'
import {BackIcon,BackLink,BackButtonContainer } from './pages/StyledSongs';
const BackButton = ({ destination = '/' }) => {
	return (
	  <BackButtonContainer>
		<BackLink to={destination}>
		  <BackIcon />
		</BackLink>
	  </BackButtonContainer>
	);
  };

  export default BackButton;
