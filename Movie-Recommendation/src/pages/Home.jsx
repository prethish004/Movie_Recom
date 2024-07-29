// import React, {  useEffect, useState,useContext, } from 'react';
// import axios from 'axios';
// import MovieCard from '../component/MovieCard/MovieCard';
// import { MovieContext } from '../context/MoviesContext';

// const baseUrl = 'https://api.themoviedb.org/3';
// const moviesUrl = `${baseUrl}/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`;

// const Home = () => {
//   const {movies,setMovies}=useContext(MovieContext);
//   const fetchMovies = async (url) => {
//       const res = await axios.get(url);
//       // console.log(res.data.results);
//       setMovies(res.data.results);
//   };

//   useEffect(() => {
//     fetchMovies(moviesUrl);
//   }, []);
//   // fetchMovies(moviesUrl)

//   return (
     
//     <div className='d-flex justify-content-center flex-wrap page' style={{background:'#555'}}>
//       {movies.map(movie =><MovieCard key={movie.id} movie={movie}/>)}
//     </div>
//   );
// };

// export default Home;


// import React, { useEffect, useState, useContext } from 'react';
// import axios from 'axios';
// import './Home.css';
// import MovieCard from '../component/MovieCard/MovieCard';
// import { MovieContext } from '../context/MoviesContext';

// const baseUrl = 'https://api.themoviedb.org/3';
// const moviesUrl = `${baseUrl}/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`;

// const Home = () => {
//   const { movies, setMovies } = useContext(MovieContext);
//   const [page, setPage] = useState(1); // New state for current page

//   const fetchMovies = async (url, page) => {
//     const res = await axios.get(`${url}&page=${page}`);
//     setMovies(res.data.results);
//   };

//   useEffect(() => {
//     fetchMovies(moviesUrl, page);
//   }, [page]); // Dependency array includes page

//   const handleNextPage = () => {
//     setPage(prevPage => prevPage + 1);
//   };

//   const handlePrevPage = () => {
//     setPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1));
//   };

//   return (
//     <div className='d-flex justify-content-center flex-wrap page' style={{ background: '#555' }}>
//       <div className="pagination">
//         <button onClick={handlePrevPage} disabled={page === 1}>Previous</button>
//         <button onClick={handleNextPage}>Next</button>
//       </div>
//       {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
//     </div>
//   );
// };

// export default Home;

// import React, { useEffect, useState, useContext } from 'react';
// import axios from 'axios';
// import './Home.css';
// import MovieCard from '../component/MovieCard/MovieCard';
// import { MovieContext } from '../context/MoviesContext';

// const baseUrl = 'https://api.themoviedb.org/3';
// const moviesUrl = `${baseUrl}/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`;
// const genre=`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`;

// const Home = () => {
//   const { movies, setMovies } = useContext(MovieContext);
//   const [page, setPage] = useState(1); // New state for current page
//   const [genres, setGenres] = useState([]);
//   const [selectedGenre, setSelectedGenre] = useState('');
//   const fetchMovies = async (url, page) => {
//     const res = await axios.get(`${url}&page=${page}`);
//     setMovies(res.data.results);
//   };
//   useEffect(() => {
//     const fetchGenres = async (genre) => {
//       const response = await axios.get(`${genre}`)
//       setGenres(response.data.genres);
//     };
//     fetchGenres();
//   }, []);

//   useEffect(() => {
//     fetchMovies(moviesUrl, page);
//   }, [page]); // Dependency array includes page

//   const handleNextPage = () => {
//     setPage(prevPage => prevPage + 1);
//   };

//   const handlePrevPage = () => {
//     setPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1));
//   };
  
//   const handleGenreChange = (event) => {
//     setSelectedGenre(event.target.value);
//   };

//   return (
//     <div className='d-flex justify-content-center flex-wrap page' style={{ background: '#555' }}>
//       <div className="pagination">
//       <label htmlFor="genre">Genre:</label>
//         <select id="genre" value={selectedGenre} onChange={handleGenreChange}>
//           <option value="">All Genres</option>
//           {genres.map((genre) => (
//             <option key={genre.id} value={genre.id}>
//               {genre.name}
//             </option>
//           ))}
//         </select>
//         <button onClick={handlePrevPage} disabled={page === 1}>Previous</button>
//         <button onClick={handleNextPage}>Next</button>
//       </div>
//       {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
//     </div>
//   );
// };

// export default Home;
// 
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import './Home.css';
import MovieCard from '../component/MovieCard/MovieCard';
import { MovieContext } from '../context/MoviesContext';

const baseUrl = 'https://api.themoviedb.org/3';
const moviesUrl = `${baseUrl}/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`;
const genreUrl = `${baseUrl}/genre/movie/list?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`;

const Home = () => {
  const { movies, setMovies } = useContext(MovieContext);
  const [page, setPage] = useState(1); // New state for current page
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');

  const fetchMovies = async (page, genreId) => {
    try {
      const url = genreId 
        ? `${moviesUrl}&page=${page}&with_genres=${genreId}` 
        : `${moviesUrl}&page=${page}`;
      console.log('Fetching movies from URL:', url); // Debugging log
      const res = await axios.get(url);
      setMovies(res.data.results);
      console.log('Movies fetched:', res.data.results); // Debugging log
    } catch (error) {
      console.error('Error fetching movies:', error); // Error handling
    }
  };

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        console.log('Fetching genres from URL:', genreUrl); // Debugging log
        const response = await axios.get(genreUrl);
        setGenres(response.data.genres);
        console.log('Genres fetched:', response.data.genres); // Debugging log
      } catch (error) {
        console.error('Error fetching genres:', error); // Error handling
      }
    };
    fetchGenres();
  }, []);

  useEffect(() => {
    fetchMovies(page, selectedGenre);
  }, [page, selectedGenre]); // Dependency array includes page and selectedGenre

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1));
  };

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
    setPage(1); // Reset to first page when genre changes
  };

  return (
    <div className='d-flex justify-content-center flex-wrap page' style={{ background: '#555' }}>
      <div className="pagination">
        <label htmlFor="genre">Genre:</label>
        <select id="genre" value={selectedGenre} onChange={handleGenreChange}>
          <option value="">All Genres</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
        <button onClick={handlePrevPage} disabled={page === 1}>Previous</button>
        <button onClick={handleNextPage}>Next</button>
      </div>
      {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
};

export default Home;
