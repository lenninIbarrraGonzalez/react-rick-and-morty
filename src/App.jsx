import { useEffect } from "react"

function App() {

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://rickandmortyapi.com/api/character')
      const data = await response.json()
      console.info(data)
    }

    fetchData()
  }, [])

  return (
    <h1>Hola Rick</h1>
  )
}

export default App