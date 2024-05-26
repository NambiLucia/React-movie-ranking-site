import React from 'react'

 function Footer() {
  return (
    <footer className='bg-black text-white py-8'>
      <div className='flex justify-around'>
        <div>
          <h4 className='text-lg font-semibold mb-4 text-custom-red'>Chill & Thrill</h4>
          <ul>
            <li><a href="#" className='hover:underline'><p>Home</p></a></li>
            <li><a href="#" className='hover:underline'><p>News</p></a></li>
            <li><a href="#" className='hover:underline'><p>Rated</p></a></li>
            <li><a href="#" className='hover:underline'><p>Contact us</p></a></li>
          </ul>
        </div>

        <div>
          <h4 className='text-lg font-semibold mb-4 text-custom-red'>Categories</h4>
          <ul>
            <li><a href="#" className='hover:underline'><p>Horror</p></a></li>
            <li><a href="#" className='hover:underline'><p>Thriller</p></a></li>
            <li><a href="#" className='hover:underline'><p>True-crime</p></a></li>
          </ul>
        </div>

        <div>
          <h4 className='text-lg font-semibold mb-4 text-custom-red'>Subscribe</h4>
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            className='w-full mb-2 px-4 py-2 text-black rounded'
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Enter your E-mail" 
            className='w-full mb-2 px-4 py-2 text-black rounded'
          />
          <button className='bg-custom-red text-white py-2 px-4 rounded'>
            Subscribe
          </button>
        </div>
        
      </div>
    </footer>
  );
}
  

export default Footer;