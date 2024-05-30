import React from 'react'
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Hero from './Hero.jsx';
import Genre from './Genre.jsx';
import Toprated from './Toprated.jsx';
import Review from './Review.jsx';
import News from './News.jsx';

 function Home() {
  return (
    <div>
    <Header />
    <Hero />
    <Genre />
    <Toprated />
    <Review />
    <News />
    <Footer />
    </div>
  )
}
export default Home;