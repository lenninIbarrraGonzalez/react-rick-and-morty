import Character from "./Character";
import useCharacter from "../hooks/useCharacter";
import PropTypes from "prop-types";

function NavPage(props) {
  const { limitPage } = useCharacter();
  const params = new URLSearchParams(window.location.search);
  let page = parseInt(params.get("page"), 10);
  const nextPage = page < limitPage ? page + 1 : 1;

  return (
    <div className="d-flex justify-content-between align-items-center">
      <p>Pagina: {props.page} </p>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => {
          //   props.page < limitPage
          //     ? props.setPage(props.page + 1)
          //     : props.setPage(1);

          const url = new URL(location);
          url.searchParams.set("page", nextPage);
          history.pushState({}, "", url);

          props.setPage(nextPage);
        }}
      >
        Siguiente: {props.page + 1}
      </button>
      <a href={`/?page=${nextPage}`}>Siguiente</a>
    </div>
  );
}

function CharactersList() {
  const { characters, loading, page, setPage, error } = useCharacter();

  console.log({ page });

  return (
    <div className="container">
      <NavPage page={page} setPage={setPage} />
      <div className="row">
        {loading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {characters.map((character) => {
          return (
            <div className="col-md-4" key={character.id}>
              <Character character={character} />
            </div>
          );
        })}
        <NavPage page={page} setPage={setPage} />
      </div>
    </div>
  );
}

CharactersList.propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func,
  limitPage: PropTypes.number,
};

export default CharactersList;
