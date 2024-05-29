import React, { useState, useEffect } from "react";

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
      <h2 className="text-custom-red text-center mb-4">GENRE</h2>
      <div className="grid lg:grid-cols-3 gap-4 mb-8">
        {genre.length > 0 ?(
          genre.map((element) => {
            return (
              <div key={element.id} className="bg-white p-4 rounded-lg shadow-md"> 
              <h3 className="text-lg font-bold mb-2 text-center">{element.attributes.Title}</h3>
              
                  <img src={`http://localhost:1337${element.attributes.image.data.attributes.url }`}
                  alt={element.attributes.title}
                  className=" flex w-full h-80 object-contain rounded-lg mb-4"/>
                  <p className="text-black hover:underline text-center">View</p>

           
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
