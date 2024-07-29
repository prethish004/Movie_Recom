import Home from './pages/Home';
import Navbar from './component/Navbar';
import Login from './pages/Login/Login'
import MovieDetails from './pages/MovieDetails';
import Register from './pages/Register/Register';
import {AuthContext} from './context/AuthContext';
import { Route,Routes} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { userObserver } from './firebase';
import { MovieContext } from './context/MoviesContext';
function App() {
  // console.log(process.env.REACT_APP_apiKey);
  const [currentUser,setCurrentUser]=useState();
  const [movies, setMovies] = useState([]);

  useEffect(()=>{userObserver(setCurrentUser)},[])
  return (
    
    <AuthContext.Provider value={{currentUser}}>
      <MovieContext.Provider value={{movies,setMovies}}>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/details/:id" element={<MovieDetails/>}/>
        </Routes>
      </MovieContext.Provider>
    </AuthContext.Provider>
    
  );
}

export default App;
