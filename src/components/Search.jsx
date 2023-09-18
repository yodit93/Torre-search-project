import { useDispatch, useSelector } from "react-redux";
import { getCandidates } from "../Redux/candidatesSlice";
import { useEffect, useState } from "react";
import Candidate from "./Candidate";
import { Link } from "react-router-dom";

const Search = () => {
     const dispatch = useDispatch();
     const {candidates} = useSelector((state) => state.candidates);
     const [state, setState] = useState({
          searchValue: '',
          filtered: [],
     });
     useEffect(() => {
       dispatch(getCandidates());
     },[dispatch]);
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
     console.log(state.filtered);
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
               {state.filtered && state.filtered.map((candidate) => {
               return (
                  <Link to={`genome/${candidate.id}`} key={candidate.id}>
                    <Candidate candidate={candidate}/>
                  </Link>  
               )})}
          </div>
     </>
     );
}
 
export default Search;