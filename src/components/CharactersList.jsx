import Character from "./Character";
import useCharacter from "../hooks/useCharacter";
import PropTypes from "prop-types";

function NavPage(props) {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <p>Pagina: {props.page} </p>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => props.setPage(props.page + 1)}
      >
        Siguinte: {props.page + 1}
      </button>
    </div>
  );
}

function CharactersList() {
  const { characters, loading, page, setPage } = useCharacter();

  console.log({ page });

  return (
    <div className="container">
      <NavPage page={page} setPage={setPage} />
      <div className="row">
        {loading && <h1>Loading...</h1>}
        {characters.map((character) => {
          return (
            <div className="col-md-4" key={character.id}>
              <Character character={character} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

CharactersList.propTypes = {
  page: PropTypes.string,
  setPage: PropTypes.func,
};

export default CharactersList;
