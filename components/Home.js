import Movie from './Movie';
import styles from '../styles/Home.module.css';

function Home() {
  const movies = [];
  for (let i = 0; i < 10; i++) {
    movies.push(<Movie key={i} />);
  }

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
