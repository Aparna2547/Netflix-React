import React, { useEffect, useState } from 'react';
import axios from '../../axiosBase';
import { API_KEY, baseUrl, imageUrl } from '../../constants/constant';

import './RowPost.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Youtube from 'react-youtube'

function RowPost(props) {
  const [movie, setMovie] = useState([]);
  const [urlId,seturlId] = useState('')

  useEffect(()=>{
    const fetchData = async () =>{
        try{
            const result = await axios.get(props.url)
            console.log(result.data.results);
            setMovie(result.data.results)
        } catch(error){
            console.log(console.error);
        }
      
    }  
    fetchData()
  },[])

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id) =>{
    console.log(id);
    // axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
    //     .then(response =>{
    //     console.log(response.data);
    //     if(response.data.results.length!==0){
    //         seturlId(response.data.results[0])
    //     }else{
    //         console.log("not trailer available");
    //         // alert('no trailer')
    //     }
    // })
    const fetchData = async ()=>{
        const res = await axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
        console.log(res);
        if(res.data.results.length!==0 && res.data.results[0] ){
            seturlId(res.data.results[0])
        }
    }
    fetchData();
  }

  return (
    <div className='row'>
         <h4 className='text-white ms-0 text-start mb-0 mt-2'>{props.title}</h4>
      <div className='posters mt-0 mx-3'>
        {movie && movie.map(obj => (
          <img onClick={()=> handleMovie(obj.id)} className='poster' alt='poster' src={`${imageUrl + obj.backdrop_path}`} key={obj.id} />
        ))}
      </div>
        {urlId &&  <Youtube videoId={urlId.key} opts={opts} /> }
    </div>
  );
}

export default RowPost;
