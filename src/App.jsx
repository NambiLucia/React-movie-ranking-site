import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Genre from './components/Genre';
import Toprated from './components/Toprated';
import Review from './components/Review';
import News from './components/News';
import Horror from './components/Horror';
import Thriller from './components/Thriller';
import Truecrime from './components/Truecrime.jsx';
 
 function App() {
  return (
    <div>
    <Header />
    <Hero />
    <Horror />
    <Thriller />
    <Truecrime />
    <Genre />
    <Toprated />
    <Review />
    <News />
    <Footer />
    </div>
  )
}
export default App;