import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MainUpComing = () => {
  const [upComingMovies, setUpComingMovies] = useState([]);
  const [isLoading, setLoadging] = useState(true);

  const getMovies = async () => {
    try{
      const reponse = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=546c72b99cf64514c2c03c7ef473011b&language=ko`);
      
      //console.log(reponse); //확인
    }
    catch(err){
      console.error('Error : ', err);  //콘솔창에 오류 확인
    }
  }
  return (
    <div>
      
    </div>
  )
}

export default MainUpComing;