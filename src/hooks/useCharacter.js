import { useEffect, useState } from "react";

function useCharacter() {
  const params = new URLSearchParams(window.location.search);
  let historyPage = parseInt(params.get("page") || 1, 10);

  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(historyPage);
  const [limitPage, setLimitPage] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character?page=${page}`
        );
        setLoading(false);
        if (!response.ok) {
          switch (response.status) {
            case 404:
              setError("La pagina no existe");
              break;
            case 500:
              setError("Erro desconocido en el servidor");
              break;
          }

          return;
        }
        const data = await response.json();
        console.log(data);
        setCharacters(data.results);
        setLimitPage(data.info.pages);
      } catch (e) {
        console.info(e);
      }
    }

    fetchData();
  }, [page]);

  return { characters, loading, page, setPage, limitPage, error };
}

export default useCharacter;
