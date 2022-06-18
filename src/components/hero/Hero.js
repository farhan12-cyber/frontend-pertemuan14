/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import ENDPOINTS from "../../utils/constans/endpoints";
import Button from "../ui/button";
import { H2, H3 } from "../ui/heading";
import {IMG, P} from "../ui/p";
import styles from "./Hero.module.css";

function Hero() {
  const [movie, setMovie] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer = movie && `https://www.youtube.com/watch?v-${movie.videos.results[1].key}`;
  useEffect(getDetailMovie, []);

  // mendapatkan 1 data dari trending movies
  async function getTrendingMovies(){
    const response = await axios(ENDPOINTS.TRENDING);
    console.log(response.data.results[1]);
    return response.data.results[1];
}
// membuat fungsi untuk mendapatkan detail movie
async function getDetailMovie(){
  // ambil id dari trending movie
  const trendingMovie = await getTrendingMovies();
  const id = trendingMovie.id;
  // fetch detail movie by id
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
  const response = await axios(URL);
  console.log(response.data);
  setMovie(response.data);
}
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <H2>{movie.title}</H2>
          <H3>
            {genres}
          </H3>
          <P>
            {movie.overview}
          </P>
          <Button variant="orange" as="a" href={trailer} target="_blank">Watch</Button>
        </div>
        <div className="hero__right">
          <IMG
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt={movie.Title}
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;