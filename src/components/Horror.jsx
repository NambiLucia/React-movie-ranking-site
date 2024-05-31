import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Horror() {
  const [horror, setHorror] = useState([]);

  function fetchData() {
    let url = "https://react-movie-backend-8a2o.onrender.com/api/pageimages?populate=*";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((obj) => {
        let horrorData = obj.data;
        setHorror(horrorData);
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
      <Header />
      <h2 className="text-custom-red text-center mb-4 font-Nosifer text-4xl pt-32 pb-8 bg-black">HORROR MOVIE COLLECTION</h2>
      <div className="grid lg:grid-cols-4 gap-4 mb-8 ">
        {horror.length > 0  ?(
          horror.map((element) => {
            return (
              <div key={element.id} className="  p-4 rounded-lg shadow-md bg-black"> 
              <h3 className="text-lg font-bold text-custom-red mb-2 text-center ">{element.attributes.title}</h3>
              
                  <img src={`https://react-movie-backend-8a2o.onrender.com${element.attributes.image.data[0].attributes.url }`}
                  alt={element.attributes.title}
                  className=" flex w-full h-80 object-cover rounded-lg mb-4"/>

                  <a href={`${element.attributes.link}`} target="_blank">
                     <p className="text-custom-red hover:underline text-center font-special-elite">Watch Trailer</p>
                  </a>

              </div>
             
            )

          })
        ):(
          <p className="text-center text-custom-yellow"> Loading</p>
        )
         
        
      
      }




      </div>




      <Footer />


    </div>
  );
}
export default Horror;
