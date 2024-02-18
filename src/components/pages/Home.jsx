import { useEffect } from "react"
import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import { deleteSongStart, loadSongStart } from "../Redux/action"
import { MDBSpinner  } from 'mdb-react-ui-kit'
import { SongContainer,Button,SongLabel,SongData,ButtonContainer, Containers,Contains, SongItem,GlobalStyle,HomeContainer,AddLink,} from './StyledSongs';
import { useNavigate } from 'react-router-dom';
import { MdOutlineAddBox} from 'react-icons/md';
import { Link } from 'react-router-dom';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { toast } from "react-toastify";

function Home() {
const dispatch = useDispatch();
const navigate = useNavigate();
const {song,loading} = useSelector(state => state.data);
console.log(song);
useEffect(()=>{
  dispatch(loadSongStart());
},[]);



if(loading){

return(
  <MDBSpinner style={{marginTop: "100px", textAlign:"center"}}role = "status">
     <span className="visually-hidden">Loading...</span>
  </MDBSpinner>
);



}
const handleDeleteSong = (id) => {
  if(window.confirm("Are You Sure You Want to Delete?")){
    dispatch(deleteSongStart(id));
    toast.success('Song Deleted Successfully');
    navigate('/'); // Redirect to the desired route after deletion
  }

};

  return (
    <>
    <GlobalStyle />
    <Containers>
			<Contains>
			<LibraryMusicIcon />

			</Contains>
      <p>Your Songs</p>
		</Containers>
    <HomeContainer>

      <AddLink to="/song/create">
        <MdOutlineAddBox />
      </AddLink>
    </HomeContainer>

    <SongContainer bg="#111827">
  {song &&
    song.map((item, index) => (
      <SongItem key={index}>
        <div>
          <div>
            <SongLabel>  </SongLabel>
            <SongData color="rgb(74 222 128);">{item.SingerName}</SongData>
          </div>
          <div>

              <SongLabel color="rgb(165 180 252)">Song:</SongLabel>
              <SongData>{item.SongName}</SongData>

          </div>
          <div>
            <SongLabel color="rgb(165 180 252)">Description:</SongLabel>
            <SongData>{item.Description}</SongData>
          </div>
          <div>
            <SongLabel color="rgb(165 180 252)">Year:</SongLabel>
            <SongData>{item.PublishYear}</SongData>
          </div>
          <ButtonContainer>
            <Link to={`/viewSong/${item.id}`}>
            <Button color="green">View</Button>
            </Link>
            <Link to={`/editSong/${item.id}`}>
            <Button color="blue">Edit</Button>
            </Link>
              <Button color="red" onClick={()=>handleDeleteSong(item.id)}>Delete</Button>
          </ButtonContainer>
        </div>
      </SongItem>
    ))}
</SongContainer>

  </>

);
}

export default Home
