import React, { useState } from "react";

const MovieForm = ({addMovie}) => {
  const [movieTitle, setMovieTitle] = useState(""); //제목 상태관리
  const [movieYear, setMovieYear] = useState(""); //개봉일자 상태관리
  const [titleError, setTitleError] = useState("") //제목을 입력하지 않았을때 에러 상태관리
  const [yearError, setYearError] = useState("") //개봉일자를 입력하지 않았을때 에러 상태관리

  //
  const restForm = () => {
    setMovieTitle("");
    setMovieYear("");
  }

  //입력한 내용 전송[출력]
  const onSubmit = (e) => {
    e.preventDefault(); //active창으로 가려는 자동기능 제거
    
    addMovie({
      id: Date.now(),
      title: movieTitle,
      year: movieYear
    })
    //실행
    restForm();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="영화 제목을 입력해주세요."
          value={movieTitle}
          onChange={(e) => {
            setMovieTitle(e.target.value);
          }}
        />
        <br />
        <input
          type="date"
          placeholder="연도를 입력해주세요."
          value={movieYear}
          onChange={(e) => {
            setMovieYear(e.target.value);
          }}
        />
        <br />
        <button type="submit">영화 추가하기</button>
      </form>
    </div>
  );
};

export default MovieForm;
