import React from 'react'
import { useSelector } from 'react-redux'

import { useParams } from 'react-router-dom'
import {StyledDiv,Heading,StyledFlexDiv,StyledText,GlobalStyle } from './StyledSongs';
import BackButton from '../BackButton';

function View() {

	const {song} = useSelector(state => state.data);
	const {id} = useParams();
	const singleSong = song.find((item) => item.id === (id));

  return (
	<>
	<GlobalStyle />

	<StyledDiv>
	<BackButton />
      <Heading>Show Songs Details</Heading>

        <StyledFlexDiv>
          <StyledText>Id : <span>{singleSong.id}</span></StyledText>
          <StyledText>Name : <span>{singleSong.SingerName}</span></StyledText>
          <StyledText>Title : <span>{singleSong.SongName}</span></StyledText>
          <StyledText>Description : <span>{singleSong.Description}</span></StyledText>
          <StyledText>Publish Year : <span>{singleSong.PublishYear}</span></StyledText>
        </StyledFlexDiv>

    </StyledDiv>
	</>

  )
}

export default View
