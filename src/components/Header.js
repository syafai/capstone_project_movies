import React from 'react';
import {Link} from 'react-router-dom';

export const Header = () => {
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
                        <Link to='/signup' className='btn'>Sign-Up</Link>
                    </li>

                    <li>
                        <Link to='/signin' className='btn'>Sign-In</Link>
                    </li>

                    <li>
                        <Link to='/signin' className='btn'>Sign-Out</Link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  )
}
