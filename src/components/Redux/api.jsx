import axios from "axios";


export const loadSongApi = async()=>
await axios.get("http://localhost:3000/song");

export const createSongApi = async(song)=>
await axios.post("http://localhost:3000/song",song);


export const deleteSongApi = async(songId)=>
await axios.delete(`http://localhost:3000/song/${songId}`);


export const updateSongApi = async(songId,songInfo)=>
await axios.put(`http://localhost:3000/song/${songId}`,songInfo);
