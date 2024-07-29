import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { logout } from '../firebase';
import { MovieContext } from '../context/MoviesContext';
import axios from 'axios';

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const [search, setSearch] = useState('');
  const {setMovies } = useContext(MovieContext);
  const navigate = useNavigate();

  const logoutHandler = () => {
    logout();
    navigate('/login');
  }

  const searchHandler = async () => {
    try{
      console.log(`${search}`)
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=0aa32a15451d7ca313c9382da9882cae&query=${search}`);
      setMovies(res.data.results);  // Ensure to set the correct data here
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <nav className='navbar navbar-expand-lg fixed-top navbar-dark' style={{ backgroundColor: '#2F4F4F' }}>
      <div className='container-fluid'>
        <Link to="/" className='navbar-brand'><h4 className='text-danger'>Movie📽️App</h4></Link>
        <div className='d-flex align-items-center'>
          {currentUser ? (
            <>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" onChange={(e) => setSearch(e.target.value)} value={search} />
                <button className="btn btn-outline-success" type="button" onClick={searchHandler}>Search</button>
              </form>
              <h4 className='text-capitalize d-inline-block text-warning max-2'>{currentUser?.displayName}</h4>
              <button type="button" className="ms-2 btn btn-outline-light" onClick={logoutHandler}>Logout</button>
            </>
          ) : (
            <div>
              <button type="button" className="ms-2 btn btn-outline-light" onClick={() => navigate('/login')}>Login</button>
              <button type="button" className="ms-2 btn btn-outline-light" onClick={() => navigate('/register')}>Register</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
