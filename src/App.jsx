import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Category from './components/Category';
import Toprated from './components/Toprated';
import Review from './components/Review';

 function App() {
  return (
    <div>
    <Header />
    <Hero />
    <Category />
    <Toprated />
    <Review />
    <Footer />
    </div>
  )
}
export default App;