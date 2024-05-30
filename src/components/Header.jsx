import React from 'react'



 function Header() {
  return (
    <div >
      <header className='flex justify-center fixed top-0 left-0 right-0'>
      <nav className='justify-center w-1/4 bg-custom-red h-24 w-full font-bold font-special-elite '>
      <ul className='flex justify-around py-8'>
      <a href="/"
            ><img
              src="./android-chrome-192x192.png"
              alt="logo"
              className="w-10 "
            />
          </a>
       <a href="/"><li>Home</li> </a>
       <a href='/#genre'><li>Genre</li></a> 
        <a href='/#top'><li>Top rated</li></a>
        <a href='/#news'><li>News</li></a>
        <a href='/#sub'><li>Contact us</li></a>

      </ul>
      </nav>
      </header>
    </div>
  )
}
export default Header;