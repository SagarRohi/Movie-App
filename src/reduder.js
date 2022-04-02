import {combineReducers} from 'redux';
import { ADD_SEARCH_RESULT,SHOW_SEARCH_RESULT ,ADD_MOVIE,REMOVE_MOVIE} from './actions';
const initialMoviesState={
    movies:[],
}
const moviesReducer=(state=initialMoviesState,action)=>{

    switch(action.type){
        case ADD_MOVIE:return {
            ...state,
            movies:[...state.movies,action.movie],
        }
        case REMOVE_MOVIE:return{
            ...state,
            movies:state.movies.filter((movie)=>movie!==action.movie),
        }
        default:return state;
    }
}

const initialSearchState={
    results:[],
    showSearchResult:false,
}
const searchReducer=(state=initialSearchState,action)=>{

    switch(action.type){
        case ADD_SEARCH_RESULT:return {
            ...state,
            results:action.result,
        }
        case SHOW_SEARCH_RESULT:return {
            ...state,
            showSearchResult:action.val
        }
        case ADD_MOVIE: return{
            ...state,
            results:state.results.filter((movie)=>movie!==action.movie),
        }
        default:return state;
    }
}

const reducer=combineReducers({moviesReducer,searchReducer});
export {reducer};