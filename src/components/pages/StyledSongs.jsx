import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { createGlobalStyle } from 'styled-components';
import {device} from "./device";
export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #111827;
	color:rgb(16, 185, 129);
}
`;
export const SongContainer = styled.div`
  background-color: #111827;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px;
  flex: 1;
  height:300px;
  margin-top:20px;
  /* Add other styles (space, color, layout) here */
`;
export const Button = styled.button`
background-color: ${props => props.color};
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  margin: 10px; /* Add spacing between buttons */
`;
export const  ButtonContainer = styled.div`
display: flex;
padding-left:50px;
`;
export const SongItem = styled.div`
  align-items: center;
  background-color: rgb(30 41 59);
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  color: rgb(241 245 249);

  width: calc(50% - 8px); /* Default width */

  /* Change width to 100% when screen size is less than 800px */
  @media ${device.tablet} {
    width: 100%;
  }
`;
export const SongLabel = styled.span`
font-weight: bold;
color: rgb(167 243 208);
padding-top:40px;
padding-left:30px;
`;
export const Container = styled.span`
display:flex;
`;
export const Containers = styled.span`
background-color: rgb(23 37 84);
  width: 100%;
  height: 60px;
  display: flex;
  padding-left:25px;
  color: rgb(241 245 249);
  gap:16px;
`;
export const Contains= styled.span`
padding-top:15px
`;
export const SongData = styled.span`
color: ${props => props.color}
padding-top:30px;
padding-left:20px;
`;
export const FormContainer = styled.div`
padding: 1rem;
`;
export const InnerContainer = styled.div`
display: flex;
flex-direction: column;
border: 2px solid #3b0764;
border-radius: 1rem;
width: 600px;
padding: 1rem;
margin: 0 auto;
height:390px;
@media ${device.tablet} {
  width: 100%;
}
`;
export const Label = styled.label`
font-size: 1.5rem;
  margin-right: 1rem;
  color: #84e396;
`;
export const Input = styled.input`
border: 2px solid #808080;
padding: 0.5rem;
width: 100%;
`;
export const FormButton = styled.button`
padding: 0.5rem 1rem;
  background-color: #a7d4f9;
  margin: 2rem auto;
`;
  export const BackButtonContainer = styled.div`
  display: flex;
  `;

export const BackLink = styled(Link)`
background-color: #3b0764;
  color: #fff;
  padding: 4px;
  border-radius: 4px;
  `;
export const BackIcon = styled(BsArrowLeft)`
font-size: 2rem;
`;
export const HomeContainer = styled.div`
display:flex;
height:30px;
flex-direction: row-reverse;
`;
export const AddLink = styled(Link)`
color: #1d4ed8;
  font-size: 4rem;
  margin-right: 40px;
`;
export const DeleteSongContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #00BFFF; /* You can adjust the color here */
  border-radius: 0.5rem;
  width: 600px;
  margin: 0 auto;
`;
export const Title = styled.h1`
  font-size: 1.5rem;
  margin: 1rem 0;
  color: #00FF7F; /* You can adjust the color here */
`;
export const Subtitle = styled.h3`
  font-size: 1.25rem;
  color: #00FF7F; /* You can adjust the color here */
`;
export const DeleteButton = styled.button`
  padding: 1rem;
  background-color: #FF0000; /* You can adjust the color here */
  color: #FFFFFF;
  width: 100%;
  cursor: pointer;
  border: none;
  border-radius: 0.25rem;
  margin: 1rem 0;
`;
export const StyledDiv = styled.div`
  padding: 1rem;
`;
export const Heading = styled.h1`
  font-size: 1.875rem;
  margin-top: 1rem;
  color: #68d391;
`;
export const StyledFlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #90cdf4;
  border-radius: 0.75rem;
  width: fit-content;
  padding: 1rem;
`;
export const StyledText = styled.span`
  margin-top: 1rem;
  font-size: 1.25rem;
  color: #68d391;
`;
