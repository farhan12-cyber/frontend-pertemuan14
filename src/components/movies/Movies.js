import { useSelector } from "react-redux";
import Movie from "../movie/movie";
import styles from "./Movies.module.css";
function Movies(props) {
  // membuat state movies
  const {title} = props;
  const movies = useSelector((store) => store.movies.movies)
  // membuat fungsi untuk handle klik
  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>{title}</h2>
        <div className={styles.movie__container}>
          {/* Looping data menggunakan map */}
          {
            movies.map((movie) => {
              return <Movie key={movie.id} movie={movie} />;
            })
          }
        </div>
        {/* Menambahkan button */}
      </section>
    </div>
  );
}

export default Movies;