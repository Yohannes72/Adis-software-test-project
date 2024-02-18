import * as types from "../Redux/actionType"
const initialState = {
	song:[],
	loading:false,
	error: null,
  };

  const songReducer = (state = initialState, action) => {
	switch(action.type){

        case types.LOAD_SONG_START:
		case types.CREATE_SONG_START:
	    case types.DELETE_SONG_START:
		case types.UPDATE_SONG_START:
		return{
			...state,
			loading:true,
		};
		case types.LOAD_SONG_SUCCESS:
			return{
				...state,
				loading:false,
				song:action.payload,
			};

			case types.CREATE_SONG_SUCCESS:
			case types.UPDATE_SONG_SUCCESS:
				return{
					...state,
					loading:false,

				};
            case types.DELETE_SONG_SUCCESS:
				return {
					...state,
					loading:false,
					song:state.song.filter((item) => item.id !== action.payload),
				};

			    case types.LOAD_SONG_ERROR:
				case types.CREATE_SONG_ERROR:
				case types.DELETE_SONG_ERROR:
				case types.UPDATE_SONG_ERROR:
				return{
					...state,
					loading:false,
					error:action.payload,
				};


	  default:
		return state;
	}
  };

  export default songReducer;
