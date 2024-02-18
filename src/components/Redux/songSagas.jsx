import * as types from "../Redux/actionType"

import {take,
	takeEvery,
	takeLatest,
	put,
	all,
	delay,
	fork,
	call,} from "redux-saga/effects"

	import {loadSongSuccess,loadSongError,createSongSuccess,createSongError,deleteSongSuccess,deleteSongError,updateSongError,updateSongSuccess} from "./action"
	import {loadSongApi,createSongApi,deleteSongApi,updateSongApi} from "./api"

	export function* onLoadSongStartAsync(){
		try{
			const response = yield call(loadSongApi,);
			if(response.status===200){

				yield put(loadSongSuccess(response.data));
			}
		}
		catch  (error){
			yield put(loadSongError(error.response.data));
		}

	}

	export function* onCreateSongStartAsync({payload}){
		try{
			const response = yield call(createSongApi,payload);
			if(response.status===200){
                   delay(500);
				yield put(createSongSuccess(response.data));
			}
		}
		catch  (error){
			yield put(createSongError(error.response.data));
		}

	}
	export function* onDeleteSongStartAsync(songId){
		try{
			const response = yield call(deleteSongApi,songId);
			if(response.status===200){

				yield put(deleteSongSuccess(songId));
			}
		}
		catch  (error){
			yield put(deleteSongError(error.response.data));
		}

	}


    export function* onUpdateSongStartAsync({payload:{id,formValue}}){
		try {
		const response =yield call(updateSongApi,id,formValue);

		if(response.status === 200){
			console.log(response.status);
			yield put(updateSongSuccess());
		}
		} catch (error) {
               yield put(updateSongError(error.response.data));
		}

	}




   export function* onDeleteSong(){
       while(true){
		const { payload:songId} = yield take(types.DELETE_SONG_START);
		yield call(onDeleteSongStartAsync,songId)
	   }
   }








	export function* onLoadSong(){
		yield takeEvery(types.LOAD_SONG_START,onLoadSongStartAsync)

	}

	export function* onCreateSong(){
		yield takeLatest(types.CREATE_SONG_START,onCreateSongStartAsync);

	}



	export function* onUpdateSong(){
		yield takeLatest(types.UPDATE_SONG_START,onUpdateSongStartAsync);

	}



	const songSaga=[
		fork(onLoadSong),fork(onCreateSong), fork(onDeleteSong),fork(onUpdateSong)];
	export default function* rootSaga(){
		yield all([...songSaga]);
	}
