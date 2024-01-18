import { useEffect, useState } from "react";

function useCharacter() {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    }

    fetchData();
  }, []);

  return { characters, loading };
}

export default useCharacter;
