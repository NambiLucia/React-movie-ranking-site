import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Genre from './components/Genre';
import Toprated from './components/Toprated';
import Review from './components/Review';
import News from './components/News';
import Horror from './components/Horror';
 
 function App() {
  return (
    <div>
    <Header />
    <Hero />
    <Horror />
    <Genre />
    <Toprated />
    <Review />
    <News />
    <Footer />
    </div>
  )
}
export default App;