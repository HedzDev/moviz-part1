import Movie from './Movie';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

function Home() {
  const [moviesData, setMoviesData] = useState([]);

  const API_KEY = '769b31e4b3af7d5acf8d80400a54c556';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        const formatedData = data.results.map((movie, i) => {
          const poster = 'https://image.tmdb.org/t/p/w500/' + movie.poster_path;
          const overview = movie.overview;
          if (overview.length > 150) {
            overview = overview.slice(0, 250) + '...';
          }
          return {
            poster,
            overview,
            title: movie.title,
            voteAverage: movie.vote_average,
            voteCount: movie.vote_count,
          };
        });
        setMoviesData(formatedData);
      });
  }, []);

  const movies = moviesData.map((movie, i) => {
    return <Movie key={i} {...movie} />;
  });

  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <img src="logo.png" alt="Logo" />
        <img className={styles.logo} src="logoletter.png" alt="Letter logo" />
      </header>
      <div className={styles.title}>LAST RELEASES</div>
      <div className={styles.moviesContainer}>{movies}</div>
    </div>
  );
}

export default Home;
