import Character from "./Character";
import useCharacter from "../hooks/useCharacter";

function CharactersList() {
  const { characters, loading } = useCharacter();

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {characters.map((character) => {
        return <Character key={character.id} character={character} />;
      })}
    </div>
  );
}

export default CharactersList;
