import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useAuth} from "../context/AuthContext";



export const Header = () => {
  const {currentUser, logOut} = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logOut();
    navigate("/signin");
  };

  if(!currentUser){
      return(
      <header>
          <div className='container'>
              <div className='.inner-content'>
                  <div className='brand'>
                      <Link to='/'>WatchList</Link>
                  </div>

                  <ul className='nav-links'>
                      <li>
                          <Link to='/signin' className='btn'>Sign-In</Link>
                      </li>
                      <li>
                          <Link to='/signup' className='btn'>Sign-up</Link>
                      </li>
                  </ul>
              </div>
          </div>
      </header>)
  }
  return (
    <header>
        <div className='container'>
            <div className='.inner-content'>
                <div className='brand'>
                    <Link to='/'>WatchList</Link>
                </div>

                <ul className='nav-links'>
                    <li>
                        <Link to='/watchlist'>Watch List</Link>
                    </li>

                    <li>
                        <Link to='/watched'>Watched </Link>
                    </li>

                    <li>
                        <Link to='/add' className='btn'>+ Add</Link>
                    </li>
                    <li>
                        <Link onClick={handleLogout} className='btn'>Sign-Out</Link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  )
}
