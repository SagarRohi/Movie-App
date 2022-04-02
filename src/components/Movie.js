import '../CSS/Movie.css';
import {connect} from 'react-redux';
import { addMovie ,removeMovie} from '../actions';
const Movie=(props)=>{
    const {movie,movies,dispatch}=props;
    const movieAdded=movies.indexOf(movie)>=0?true:false;
    return <div className="Movie-movie-container">
      <div className="movie-info">
        <p className="title"><span>Name</span>{movie.Title}</p>
        <p className="year"><span>Year</span>{movie.Year}</p>
        <p className="imdbID"><span>IMDB</span>{movie.imdbID}</p>
        {!movieAdded?
        <button className='Movie-btn' onClick={()=>{
          dispatch(addMovie(movie));
        }}>Add Movie</button>:
        <button className='Movie-btn' onClick={()=>{
          dispatch(removeMovie(movie));
        }}>Remove Movie</button>
      }
      </div>
      <div className="poster">
          <img src={movie.Poster} alt={movie.Title}/>
      </div>
    </div>
}

function mapStateToProps(state){
  return {
    movies:state.moviesReducer.movies,
  }
}
const connectedComponent=connect(mapStateToProps)(Movie);
export default connectedComponent;