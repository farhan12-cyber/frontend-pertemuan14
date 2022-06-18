import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AddMoviesApp from "../../components/addmoviesapp/AddMoviesApp";
import Hero from "../../components/hero/Hero";
import Movies from "../../components/movies/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constans/endpoints";

function TopRated() {   
    const dispatch = useDispatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async ()=>{
        getTopRated();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    
    async function getTopRated(){
        const response = await axios(ENDPOINTS.TOP_RATED);
        dispatch(updateMovies(response.data.results));
    }
    return (
    <div>

    <Hero />
    <Movies title='Top Rated Movies' />
    <AddMoviesApp />
    </div>
    );
}

export default TopRated;