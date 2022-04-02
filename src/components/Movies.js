import '../CSS/movies.css';
import Movie from './Movie';
import { connect } from 'react-redux';
import { updateSearchResult } from '../actions';
const Movies=(props)=>{
    const {showSearchResult,results,movies,dispatch}=props;
    const moviesToShow=showSearchResult?results:movies;
    return (
        <div className="movies-container">
            <div className="tabs">
                {
                 !showSearchResult? 
                 <>
                <div className="favourite tab">Favourite</div></>:
                <><div className="all-tab tab">Results</div>
                <div className="favourite tab" onClick={()=>{
                    dispatch(updateSearchResult(false));
                }}>Back</div></>
               }
            </div>
             <div className="movies">
                {moviesToShow.length===0?<div className='no-movies'>
                  No Movies To Show !
                </div>:
                <div>
                {moviesToShow.map((movie,id)=>{
                    return <Movie key={id} movie={movie}/>
                })}
               </div>}
             </div>
        </div>
    )
}

function mapStateToProps(state){
    const {moviesReducer,searchReducer} = state;
    return {
        ...moviesReducer,
        ...searchReducer
    }
}
const connectedComponent=connect(mapStateToProps)(Movies);
export default connectedComponent;