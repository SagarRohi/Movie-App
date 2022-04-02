import { useState} from "react";
import { search_movie } from "../actions";
import { connect } from "react-redux";
const Search =({dispatch})=>{
    const [search,setSearch]=useState('');
    const searchMovies=()=>{
        if(search.length===0) return;
        dispatch(search_movie(search));
        setSearch('');
     }
    return (
    <div className="search-bar">
      <input type='text' placeholder="Search Your Movie" 
      value={search} 
      onChange={(e)=>setSearch(e.target.value)}
        onKeyPress={(e)=>e.key==='Enter'?searchMovies():null}
      />
      <button className="btn" onClick={searchMovies} >Search</button>
    </div>
    )
}

function mapStateToProps(state){
  return {}
}

const connectedComponent=connect(mapStateToProps)(Search);
export default connectedComponent;