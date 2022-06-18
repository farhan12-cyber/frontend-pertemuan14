import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AddMoviesApp from "../../components/addmoviesapp/AddMoviesApp";
import Hero from "../../components/hero/Hero";
import Movies from "../../components/movies/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constans/endpoints";

function Popular() {
    // const API_KEY = process.env.REACT_APP_API_KEY;
    // const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;
    // membuat state movies
    const dispatch = useDispatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( () => {
        getPopularMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
// =========================================================================
    async function getPopularMovies(){
        // fetch data dari axios
        const response = await axios(ENDPOINTS.POPULAR);
        // simpan data movies dari axios ke state movies
        //update state menggunakan setmovies().
        dispatch(updateMovies(response.data.results));
    }
// =========================================================================
    return (
    <div>
        <Hero />
    <Movies title='Popular Movies' />
    <AddMoviesApp />
    </div>
    );
}

export default Popular;