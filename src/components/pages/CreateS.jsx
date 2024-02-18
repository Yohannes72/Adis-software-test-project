import React, { useEffect, useState } from 'react';
import BackButton from '../BackButton';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate,useParams } from 'react-router-dom';
import { FormContainer, InnerContainer, Label, Input, FormButton, GlobalStyle } from './StyledSongs';
import { createSongStart, updateSongStart } from '../Redux/action';
import { toast } from 'react-toastify';

const initialState = {
  SingerName: '',
  SongName: '',
  Description: '',
  PublishYear: '',

};
function CreateS() {
  const [formValue, setFormValue] = useState(initialState);
  const [editMode,setEditMode] = useState(false);
  const {song} = useSelector(state => state.data);
  const {SingerName,SongName,Description,PublishYear} = formValue;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log(song);
  const {id} = useParams();
  console.log(typeof(id));
  useEffect(()=>{
    setEditMode(true);
  if(id){
  const singleSong = song.find((item) => item.id === (id));
  setFormValue({...singleSong});
  console.log(singleSong);
  }else{
    setEditMode(false);
    setFormValue({...initialState});
  }
  },[id]);

  const handleSaveSong = async (e) => {
    e.preventDefault();
    if (Object.values(formValue).every((value) => value !== '')) {
          if(!editMode){
            dispatch(createSongStart(formValue));
            toast.success("Song Created Successfully");
            navigate('/');
          }
        else{
          dispatch(updateSongStart({id,formValue}));
          console.log(formValue);
          setEditMode(false);
          toast.success("Song Updated Successfully");
          navigate('/');
        }

      }
     else {
      toast.error('Please fill in all fields.');
    }
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({...formValue, [name]: value,});
  };

  return (
    <div>
      <GlobalStyle />
      <FormContainer>
        <BackButton />
        <h1 style={{ fontSize: '2rem', marginTop: '1rem', color: '#84e396' }}>{!editMode ? "Create Song" : "Update The  Song"}</h1>
        <InnerContainer>
          <div style={{ marginTop: '1rem' }}>
            <Label>Name</Label>
            <Input
              name="SingerName"
              type="text"
              value={SingerName || ""}
              onChange={onInputChange}
              required
            />
          </div>
          <div style={{ marginTop: '1rem' }}>
            <Label>Song</Label>
            <Input
              name="SongName"
              type="text"
              value={SongName || ""}
              onChange={onInputChange}
              required
            />
          </div>
          <div style={{ marginTop: '1rem' }}>
            <Label>Description</Label>
            <Input
              name="Description"
              type="text"
              value={Description || ""}
              onChange={onInputChange}
              required
            />
          </div>

          <div style={{ marginTop: '1rem' }}>
            <Label>Publish Year</Label>
            <Input
              name="PublishYear"
              type="text"
              value={PublishYear || ""}
              onChange={onInputChange}
              required
            />
          </div>
          <FormButton onClick={handleSaveSong}>{!editMode ? "Save Song" : "Update"}</FormButton>
        </InnerContainer>
      </FormContainer>
    </div>
  );
}

export default CreateS;
