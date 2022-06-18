import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ENDPOINTS from "../../../utils/constans/endpoints";
import Button from "../button";
import StyledDetailMovie from "./DetailMovie.styled.js";
// ============================================================================================
function DetailMovie(){
    const {id} = useParams();
    const [movie, setMovie] = useState("");
    // const API_KEY = process.env.REACT_APP_API_KEY;
    const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
    const trailer = movie && `https://www.youtube.com/watch?v-${movie.videos.results[0].key}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{
        getDetailMoive();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id]);
    
    async function getDetailMoive(){
        // const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
        const response = await axios(ENDPOINTS.DETAIL(id));
        // set hasil data dari axios ke state movie
        setMovie(response.data);
    }
    console.log(movie);
    return (
        <>
        <StyledDetailMovie>
        <div className="poster">
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title} />
        </div>
        <div className="info">
        <h2>{movie.title}</h2>
        <h3>{genres}</h3>
        <p>{movie.overview}</p>
        <Button as="a" href={trailer}>Watch</Button>
        </div>
        </StyledDetailMovie>
        </>
    );

}
export default DetailMovie;