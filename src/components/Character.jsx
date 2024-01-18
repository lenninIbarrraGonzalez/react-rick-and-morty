import PropTypes from "prop-types";

function Character({ character }) {
  return (
    <div>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
    </div>
  );
}

Character.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default Character;
