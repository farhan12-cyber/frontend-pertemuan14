import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Movies from "../../components/movies/Movies";
import DetailMovie from "../../components/ui/DetailMovie";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constans/endpoints";

function Detail(){
    const {id} = useParams();
    const dispatch = useDispatch();
    // const API_KEY = process.env.REACT_APP_API_KEY;

    useEffect(()=>{
        getRecommendationMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function getRecommendationMovies(){
        // const URL = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`;
        const response = await axios(ENDPOINTS.REKOMENDASI(id));
        dispatch(updateMovies(response.data.results));
        // setMovies(response.data.results);
    }
    return(
        <>
        <DetailMovie />
        <Movies title="Rekomendasi Film"/>
        </>
    );
}
export default Detail;