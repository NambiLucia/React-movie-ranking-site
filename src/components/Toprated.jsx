import React from "react";
import { Link } from "react-router-dom";

function Toprated() {
  const topData = [
    { 
      title: "#01 The Nun II",
      image: "/images/nun2.jpg",
      trailer: "https://www.youtube.com/watch?v=CAeeIdD4KQU"
    },
    {
      title: "#02 Evil Dead Rise",
      image: "/images/evil-dead-rise-.jpg",
      trailer: "https://www.youtube.com/watch?v=AQ1hzzWJUYo"
    },
    {
      title: "#03 Scream VI",
      image: "/images/scream vi.jpg",
      trailer: "https://www.youtube.com/watch?v=1Ie2qmAOc6Q"
    },
    {
      title: "#04 Saw X",
      image: "/images/sawX.jpg",
      trailer: "https://www.youtube.com/watch?v=t3PzUo4P21c"
    },
    {
      title: "#05 American Nightmare",
      image: "/images/american2.jpg",
      trailer: "https://www.youtube.com/watch?v=Yonx7CyoK3k"
    }
  ];

  return (
    <div className="bg-black">
      <h1 className="text-4xl font-bold text-center mb-8 text-custom-red font-Nosifer py-8" id={`top`} >HIGHEST RATED</h1>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {topData.map((data,index) => (
<div key={index} className="bg-black rounded-lg shadow-lg p-4">
<h4 className="text-xl font-semibold mb-2 text-custom-yellow font-special-elite">{data.title}</h4>
<img 
src={data.image}
alt={`movie ${index + 1}`}
className="w-full h-64 object-cover rounded-lg mb-4"/>
<a href={data.trailer} target="_blank" className="hover:underline text-custom-yellow font-special-elite">Watch Trailer</a>



</div>

        ))}
      </div>
    </div>
  );
}

export default Toprated;
