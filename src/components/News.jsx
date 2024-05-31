import React, { useState, useEffect } from "react";

function News() {
  const [news, setNews] = useState([]);

  function fetchdata() {
    const url = "https://react-movie-backend-8a2o.onrender.com/api/news?populate=*";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((obj) => {
        let newsObj = obj.data;
        setNews(newsObj);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="bg-black">
      <h2 className="text-custom-yellow text-center  font-Nosifer py-8 text-4xl" id={`news`} >Have you Voted for the iHorror Awards 2024?</h2><br />
     <a  href="https://ihorror.com/" target="_blank"><h3 className="hover:underline text-center text-custom-yellow font-special-elite text-2xl ">Click to Vote Now</h3>
     </a> 

      <div >
        {news.length > 0 ? (
          news.map((element) => (
            <div key={element.id} className="flex justify-center ">
              <img src={`https://react-movie-backend-8a2o.onrender.com${element.attributes.image.data.attributes.url}`}alt="ihorror"  className="text-center"/>
           
            </div>
          ))
        ) : (
          <p className="text-center text-custom-yellow font-special-elite">Loading....</p>
        )}
      </div>
    </div>
  );
}

export default News;
