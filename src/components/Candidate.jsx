import PropTypes from 'prop-types';
const Candidate = ({candidate}) => {
    return ( 
        <div className="candidate-info">
            <img src={candidate.imageUrl} alt="candidate photo" />
            <h3>{candidate.name}</h3>
        </div>
     );
}
Candidate.propTypes = {
    candidate: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
    }).isRequired,
};

export default Candidate;