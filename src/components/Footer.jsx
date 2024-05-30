import React from 'react'
import Subscribe from './Subscribe';

 function Footer() {
  return (
    <footer className='bg-black text-white py-8 font-special-elite'>
      <div className='flex justify-around'>
        <div>
          <h4 className='text-lg font-semibold mb-4 text-custom-red'>Chill & Thrill</h4>
          <ul>
            <li><a href="/" className='hover:underline'><p>Home</p></a></li>
            <li><a href="/#news" className='hover:underline'><p>News</p></a></li>
            <li><a href="/#top" className='hover:underline'><p>Rated</p></a></li>
            <li><a href="/#sub" className='hover:underline'><p>Contact us</p></a></li>
          </ul>
        </div>

        <div>
          <h4 className='text-lg font-semibold mb-4 text-custom-red'>Categories</h4>
          <ul>
            <li><a href="/Horror"target="_blank" className='hover:underline'><p>Horror</p></a></li>
            <li><a href="/Thriller" target='_blank' className='hover:underline'><p>Thriller</p></a></li>
            <li><a href="/Truecrime" target='_blank'  className='hover:underline'><p>True-crime</p></a></li>
          </ul>
        </div>

        <div id={`sub`} >
          <Subscribe />
        </div>
        
      </div>
    </footer>
  );
}
  

export default Footer;