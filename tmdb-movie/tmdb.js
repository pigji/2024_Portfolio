//불러오기
import { Route, Routes } from "react-router-dom";
import Navbar from "./src/components/Navbar";

const tmdb = () => {
  return(
    <div>
      <Routes>
        <Route path="/" element={<Navbar/>}/>
      </Routes>
    </div>
  )
}

export default tmdb;