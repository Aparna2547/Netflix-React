import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {baseUrl,API_KEY,imageUrl} from '../../constants/constant'
import './Banner.css'
import RowPost from '../RowPost/RowPost'
function Banner() {
    const [movie, setMovie] = useState();

    useEffect(() => {
        axios.get(`${baseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
          console.log(response.data.results[0]);
          const movie = response.data.results;

          const randomIndex = Math.floor(Math.random() * movie.length);
          setMovie(movie[randomIndex])
        })
        .catch((error) => {
          console.error('Error fetching data:', error.message);
        });
      }, []);


    return (
        <div 
        style={{
            backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ''})`,
          }}
         className='banner'>
            <div className='content' >
            <h1 className='title'>{movie ? movie.title : ''}  </h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>{movie ? movie.overview : ''}</h1>
            </div>
          <div className='fade-bottom'>
            {/* <RowPost /> */}
          </div>
        </div>
    )
}

export default Banner 