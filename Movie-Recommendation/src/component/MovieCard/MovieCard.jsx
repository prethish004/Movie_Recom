import React,{useContext}from 'react'
import classes from './MovieCard.module.css';
import {AuthContext} from '../../context/AuthContext';
import {useNavigate} from 'react-router-dom';

const imgUrl='https://image.tmdb.org/t/p/w1280';

const MovieCard = (props) => {
    const navigate=useNavigate();
    const {currentUser}=useContext(AuthContext);
    const{title,poster_path,overview,vote_average,id}=props.movie
    const showDetails=(id)=>{
        console.log(id);
        if(currentUser){
            navigate(`/details/${id}`);
        }
        else{
            alert('Please login to see movie details')
        }
    }
    const setVoteColor=(vote)=>{
        if(vote>=8) return 'green';
        else if(vote>=6.5) return 'goldenrod';
        else return 'red';
    }
  return (
    <div className={classes.movie} onClick={()=>showDetails(id)}>
        <img src={`${imgUrl}${poster_path}`} alt={title}/>
        <div className='text-center p-2 text-white' style={{borderTop:'1px solid white'}}>
            <h5>{title}</h5>
            {currentUser && (<span className={classes.vote} style={{backgroundColor:setVoteColor(vote_average)}}>
                {vote_average}
            </span>)}
        </div>
        <div className={classes.overview}>
            <h2>Overview</h2>
            <h5>{title}</h5>
            <p>{overview}</p>
        </div>
    </div>
  )
}

export default MovieCard