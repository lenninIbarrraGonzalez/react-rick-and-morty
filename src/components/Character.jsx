import PropTypes from "prop-types";

function Character({ character }) {
  return (
    <div className="text-center p-5">
      <h3>{character.name}</h3>
      <img
        className="img-fluid rounded-pill"
        src={character.image}
        alt={character.name}
      />
      <p>{character.origin.name}</p>
    </div>
  );
}

Character.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    origin: PropTypes.object,
  }),
};

export default Character;
