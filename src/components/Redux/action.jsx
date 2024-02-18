import * as types from "../Redux/actionType"


export const loadSongStart=()=>({
	type:types.LOAD_SONG_START,
});

export const loadSongSuccess=(song)=>({
	type:types.LOAD_SONG_SUCCESS,
	payload:song,
});

export const loadSongError=(error)=>({
	type:types.LOAD_SONG_ERROR,
	payload:error,
});

export const  createSongStart=(song)=>({
	type: types.CREATE_SONG_START,
	payload:song,
});

export const createSongSuccess=()=>({
	type: types.CREATE_SONG_SUCCESS,

});

export const createSongError=(error)=>({
	type: types.CREATE_SONG_ERROR,
	payload:error,
});




export const  deleteSongStart=(songId)=>({
	type: types.DELETE_SONG_START,
  payload:songId,
});

export const deleteSongSuccess=(songId)=>({
	type: types.DELETE_SONG_SUCCESS,
  payload:songId,

});

export const deleteSongError=(error)=>({
	type: types.DELETE_SONG_ERROR,
	payload:error,
});


export const  updateSongStart=(songInfo)=>({
	type: types.UPDATE_SONG_START,
  payload:songInfo,
});

export const updateSongSuccess=()=>({
	type: types.UPDATE_SONG_SUCCESS,


});

export const updateSongError=(error)=>({
	type: types.UPDATE_SONG_ERROR,
	payload:error,
});
