const Candidate = ({candidate}) => {
    return ( 
        <div className="candidate-info">
            <img src={candidate.photo} alt="candidate photo" />
            <h3>{candidate.name}</h3>
        </div>
     );
}
 
export default Candidate;