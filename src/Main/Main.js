import React, { useState } from 'react'
import styles from './Main.module.scss'
import Content from '../components/Content/Content'
import Search from '../components/Search/Search'
import Title from '../components/Title/Title'

const axios = require('axios').default;

const Main = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState(null);

    const getMoviesData = () => {
        axios.get(`http://www.omdbapi.com/?s=${query}&apikey=73157ade`)
        .then(response => setResults(response.data.Search))
        .catch(err => console.log(err));
    }
    const handleClearResults = () =>{
        setResults(null);
        setQuery("");
    }
    return (
    <div>
        <Title />
        <Search
        query={query}
        setQuery={setQuery}
        onUserClick={getMoviesData}
        />
        <Content searchedMovies={results} />
        <button type='button' onClick={() => handleClearResults()}>Clear</button>
    </div>
  )
}

export default Main