import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Genome = () => {
    const {id} = useParams();
    const {candidates} = useSelector((state) => state.candidates);
    return ( 
        <div className="candidate-genome">
            {candidates.filter((candidate) => id == candidate.id).map((candidate) => {
                return (
                    <div key={candidate.id} className="genome">
                        <img src={candidate.photo} alt="candidate photo" />
                        <div>
                            <h2>{candidate.name}</h2>
                            <p>{candidate.profession}</p>
                            <p>{candidate.years_of_experience} years of experience</p>
                        </div>
                    </div>
                )
            })}
        </div>
     );
}
 
export default Genome;