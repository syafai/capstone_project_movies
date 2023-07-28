import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Header} from "./components/Header";
import {Watchlist} from "./components/Watchlist";
import {Watched} from "./components/Watched";
import {Add} from "./components/Add";
import Signup from './components/Signup';
import Signin from './components/Signin';
import "./App.css";
import "./lib/font-awesome/css/all.min.css";
import {GlobalProvider} from "./context/GlobalState";
import Dashboard from "./components/Dashboard";
import 'firebase/auth';
import {useAuth} from "./context/AuthContext";

function App() {
    const {currentUser} = useAuth()
    if (!currentUser) {
        return (
            <Router>
                <Header/>
                <Routes>
                    <Route exact path="/" element={<Signin/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/signin" element={<Signin/>}/>
                </Routes>

            </Router>
        );
    }
    return (
        <GlobalProvider>
            <Router>
                <Header/>
                <Routes>
                    <Route exact path="/" element={<Dashboard/>}/>
                    <Route path="/watchlist" element={<Watchlist/>}/>
                    <Route path="/add" element={<Add/>}/>
                    <Route path="/watched" element={<Watched/>}/>
                </Routes>

            </Router>
        </GlobalProvider>
    );
}

export default App;
