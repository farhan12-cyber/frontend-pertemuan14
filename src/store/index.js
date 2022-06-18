// import configurate store
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/moviesSlice";

/**
 * buat store : state global
 * menyimpan berabgai slice reducer
 */
const store = configureStore({
    reducer :{
        movies: moviesReducer,
    },
});

// export store
export default store;