import React, {useState} from "react";
import ListMovie from "../components/ListMovie";
import MovieForm from "../components/MovieForm";

const Movies = () => {

  const [movies, setMovies] = useState([
      { title: "컨저링", year: "2013-09-17" },
      { title: "모아나", year: "2024-11-27" },
      { title: "베놈", year: "2024-11-23" }
  ]);

  //등록한 영화의 ID와 삭제할 영화의 ID가 같을 경우 삭제
  const removeMovie = (id) => {
    setMovies(movies.filter((movie) => {
      return movie.id !== id
    }))
  }

  const addMovie = (movie) => {
    setMovies([
      ...movies,
      movie
    ])
  }

  return (
    <div className="movies">
      <h1>Movie List</h1>
      <MovieForm addMovie = {addMovie} />
      {
        movies.map((item, i) => {
          return(
            <ListMovie item={item} key={i} removeMovie={removeMovie} />
          )
        })
      }
    </div>
  );
};

export default Movies;
