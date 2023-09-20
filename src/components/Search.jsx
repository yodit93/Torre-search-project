import { useDispatch, useSelector } from "react-redux";
import { addRecentSearch, getCandidates } from "../Redux/candidatesSlice";
import { useEffect, useState } from "react";
import Candidate from "./Candidate";
import { Link } from "react-router-dom";

const Search = () => {
     const dispatch = useDispatch();
     const {candidates, recentSearches} = useSelector((state) => state.candidates);
     const [state, setState] = useState({
          searchValue: '',
          filtered: [],
     });
    
     useEffect(() => {
       dispatch(getCandidates());
     },[]);
     const handleSearch = (e) => {
          const results = candidates.filter((candidate) => {
               if(e.target.value === '') return;
               return candidate.name.toLowerCase().includes(e.target.value.toLowerCase());
          });
          setState({
               searchValue: e.target.value,
               filtered: results,
          })
     }
     const handleRecentSearch = (id) => {
          dispatch(addRecentSearch(id));
     };
    return (
     <>
          <div className="search-cont">
             <input
             type="text"
             placeholder="Search by name"
             value={state.searchValue}
             onChange={handleSearch}
             />
          </div>
          <div className="filtered-cont">
               {state.searchValue === '' && recentSearches.map((candidate) => {
                    return (
                         <Link to={`genome/${candidate.id}`} key={candidate.id} onClick={() => handleRecentSearch(candidate.id)}>
                              <Candidate candidate={candidate}/>
                         </Link>
                    )
               })}
               {state.filtered && state.filtered.map((candidate) => {
               return (
                  <Link to={`genome/${candidate.id}`} key={candidate.id} onClick={() => handleRecentSearch(candidate.id)}>
                    <Candidate candidate={candidate}/>
                  </Link>  
               )})}
          </div>
     </>
     );
}
 
export default Search;