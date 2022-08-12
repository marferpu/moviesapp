import React from 'react'
import styles from './Content.module.scss'

const Content = ({searchedMovies}) => {
  return (
    <div className={styles.container}>
      {searchedMovies?.map((movie) => {
        return (
          <div>
            <img src={movie.Poster} alt='movie'/>
            <p>{movie.Title}</p>
            <p>{movie.Year}</p>
          </div>
        )
      })}

    </div>
  )
}

export default Content