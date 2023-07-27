import React, {createContext, useReducer, useEffect, useState} from 'react';
import AppReducer from './AppReducer';

const initialState = {
    watchlist: [],
    watched: []
};

export const GlobalContext = createContext(initialState);


export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    useEffect(() => {
        if(currentUser)
        // Check if the user is logged in
        // For example, you can use your authentication context to determine if the user is logged in
        // For the sake of example, I am using a boolean state 'isUserLoggedIn'
        // Replace 'isUserLoggedIn' with the actual value from your authentication context
        setIsUserLoggedIn(true); // Set to true if the user is logged in, otherwise false
    }, []);

    useEffect(() => {
        if (!isUserLoggedIn) {
            // Clear local storage and reset state when the user signs out or a new user logs in
            localStorage.removeItem('watchlist');
            localStorage.removeItem('watched');
            dispatch({ type: "RESET_STATE" });
        }
    }, [isUserLoggedIn]);

useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
        localStorage.setItem('watched', JSON.stringify(state.watched));
    }, [state]);
    
    const addMovieToWatchlist = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie})
    }

    const removeMovieFromWatchlist = (id) => {
        dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id})
    }

    const addMovieToWatched = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie})
    }

    const moveToWatchlist = (movie) => {
        dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie})
    }

    const removeFromWatched = (id) => {
        dispatch({ type: "REMOVE_FROM_WATCHED", payload: id})
    }


    
    return (
        <GlobalContext.Provider value={{
            watchlist: state.watchlist, 
            watched: state.watched, 
            addMovieToWatchlist,
            removeMovieFromWatchlist,
            addMovieToWatched,
            moveToWatchlist,
            removeFromWatched,}}>
            {props.children}
        </GlobalContext.Provider>
    )
}