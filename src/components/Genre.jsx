import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Genre() {
  const [genre, setGenres] = useState([]);

  function fetchData() {
    let url = "http://localhost:1337/api/genres?populate=*";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((obj) => {
        let genreData = obj.data;
        setGenres(genreData);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-custom-red text-center mb-4 font-Nosifer text-4xl py-8" >GENRE</h2>
      <div className="grid lg:grid-cols-3 gap-4 mb-8">
        {genre.length > 0 ?(
          genre.map((element) => {
       
            return (
              <div key={element.id} id={`genre`} 
              className="bg-white p-4 rounded-lg shadow-md"> 
              <h3 className="text-lg font-bold mb-2 text-center font-special-elite ">{element.attributes.Title}</h3>
              
                  <img src={element.attributes.image.data.attributes.url}
                  alt={element.attributes.title}
                  className=" flex w-full h-80 object-contain rounded-lg mb-4"/>
                  <a href={element.attributes.link} target="_blank">
                    <p className="text-black hover:underline text-center font-special-elite">View</p>
                  </a>

           
              </div>
             
            )

          })
        ):(
          <p className="text-center text-custom-yellow"> Loading</p>
        )
         
        
      
      }




      </div>







    </div>
  );
}
export default Genre;
