export const ADD_SEARCH_RESULT='ADD_SEARCH_RESULT';
export const SHOW_SEARCH_RESULT='SHOW_SEARCH_RESULT';
export const ADD_MOVIE='ADD_MOVIE';
export const REMOVE_MOVIE='REMOVE_MOVIE';
export const SEARCH_MOIVE='SEARCH_MOIVE';

export const addSearchResult=(result)=>{
    return {
         type:ADD_SEARCH_RESULT,
         result,
    }
}
export const updateSearchResult=(val)=>{
    return {
        type:SHOW_SEARCH_RESULT,
        val
    }
}

export const  addMovie=(movie)=>{
    return {
        type:ADD_MOVIE,
        movie,
    }
}
export const  removeMovie=(movie)=>{
    return {
        type:REMOVE_MOVIE,
        movie,
    }
}

export const search_movie=(movie)=>{
//e1395ca6
const URL=`http://www.omdbapi.com/?apikey=e1395ca6&s=${movie}`;
return function(dispatch){
    fetch(URL)
    .then((res)=>res.json()).then((data)=>{
      if(!(data.Response==='False')){
             dispatch(addSearchResult(data.Search));
       } else dispatch(addSearchResult([]));
       dispatch(updateSearchResult(true));
      });
    }
}