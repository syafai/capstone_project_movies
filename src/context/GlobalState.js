import React, {createContext, useReducer, useEffect, useState} from 'react';
import AppReducer from './AppReducer';
import  {useAuth} from "./AuthContext";
import { loadWatchlist, saveWatchlist} from "../firebase";

const initialState = {
    watchlist: [],
    watched: []

};
export const GlobalContext = createContext(initialState);


export const GlobalProvider = props => {
    const {currentUser} = useAuth()
    const [state, dispatch] = useReducer(AppReducer, initialState)
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
       setIsUserLoggedIn(currentUser);
       if(currentUser){
           loadWatchlist(currentUser.email).then((data)=> {
               console.log(data)
               dispatch({type: "LOAD_LIST", payload: data})
               setIsLoading(false)
           })
       }
       // Set to true if the user is logged in, otherwise false
    }, [currentUser]);

    useEffect(() => {
        if (!isUserLoggedIn) {
            // Clear local storage and reset state when the user signs out or a new user logs in
            dispatch({ type: "RESET_STATE" });
        }
    }, [isUserLoggedIn]);

    useEffect(() => {
            if(!isLoading) {
                saveWatchlist(currentUser.email, state.watchlist, state.watched)
                    .then((data) => console.log(data))
            }
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
