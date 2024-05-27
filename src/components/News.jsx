import React, { useState, useEffect } from "react";

function News() {
  const [news, setNews] = useState([]);

  function fetchdata() {
    const url = "http://localhost:1337/api/news?populate=*";
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
      <h2 className="text-custom-yellow text-center">Have you Voted for the iHorror Awards 2024?</h2><br />
     <a  href="https://ihorror.com/" target="_blank"><h3 className="hover:underline text-center text-custom-yellow">Click to Vote Now</h3>
     </a> 

      <div >
        {news.length > 0 ? (
          news.map((element) => (
            <div key={element.id} className="flex justify-center ">
              <img src={`http://localhost:1337${element.attributes.image.data.attributes.url}`}alt="ihorror"  className="text-center"/>
           
            </div>
          ))
        ) : (
          <p className="text-center text-custom-yellow">Loading....</p>
        )}
      </div>
    </div>
  );
}

export default News;