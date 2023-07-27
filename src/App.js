import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Watchlist } from "./components/Watchlist";
import { Watched } from "./components/Watched";
import { Add } from "./components/Add";
import  Signup  from './components/Signup';
import Signin from './components/Signin';
import "./App.css";
import "./lib/font-awesome/css/all.min.css";
import { GlobalProvider } from "./context/GlobalState";
import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./components/Dashboard";
import 'firebase/auth';
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
  <AuthProvider>  
    <GlobalProvider>
      <Router>
        <Header />

          <Routes>
            <PrivateRoute exact path="/" element={<Dashboard />} />
            <PrivateRoute path="/watchlist" element={<Watchlist/>}/>
            <PrivateRoute path="/add" element={<Add />} />
            <PrivateRoute path="/watched" element={<Watched />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>

      </Router>
    </GlobalProvider>
  </AuthProvider>  
  );
}
export default App;