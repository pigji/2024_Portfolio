import React from 'react';
import Header from '../components/Header';
import Bus from '../components/Bus';
import Popularity from '../components/Popularity';
import Best from '../components/Best';
import Food from '../components/Food';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div>Home
      <Header />
      <Bus />
      <Popularity />
      <Best />
      <Food />
      <Footer />
    </div>
  )
}

export default Home;