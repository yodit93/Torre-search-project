import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Genome = () => {
    const {id} = useParams();
    const {candidates} = useSelector((state) => state.candidates);
    return ( 
        <div className="candidate-genome">
            {candidates.filter((candidate) => id == candidate.ardaId).map((candidate) => {
                return (
                    <div key={candidate.ardaId} className="genome">
                        <img src={candidate.imageUrl} alt="candidate photo" />
                        <div>
                            <h2>{candidate.name}</h2>
                            <p>{candidate.professionalHeadline}</p>
                            <p>{candidate.pageRank} years of experience</p>
                        </div>
                    </div>
                )
            })}
        </div>
     );
}
 
export default Genome;