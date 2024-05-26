import React from 'react'

 function Header() {
  return (
    <div>
      <header className='flex justify-center'>
      <nav className='justify-center w-1/4 bg-custom-red h-24 w-full'>
      <ul className='flex justify-around py-8'>
        <li>Home</li>
        <li>Category</li>
        <li>Top rated</li>
        <li>News</li>
        <li>Contact us</li>

      </ul>
      </nav>
      </header>
    </div>
  )
}
export default Header;