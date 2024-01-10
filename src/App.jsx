import React from 'react'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = React.useState('Hello!')
  return (
    <>
      <form>
        <label htmlFor="search-input">
          Search:
        </label>
        <input type="text"
          id='search-input'
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value)
          }}
        />
      </form>

      <p>Search term: {searchTerm}</p>
      <button
        onClick={() => setSearchTerm(Math.random())}>
        Click me
      </button>
    </>
  )
}

export default App
