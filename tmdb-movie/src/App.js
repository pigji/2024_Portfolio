import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Event from './pages/Event';
import Users from './pages/Users';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movies' element={<Movies />}/>
        <Route path='/event' element={<Event />}/>
        <Route path='/users' element={<Users />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
