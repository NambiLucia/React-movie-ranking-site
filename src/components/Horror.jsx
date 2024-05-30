import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Horror() {
  const [horror, setHorror] = useState([]);

  function fetchData() {
    let url = "http://localhost:1337/api/pageimages?populate=*";
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
      <h2 className="text-custom-red text-center mb-4">HORROR MOVIE COLLECTION</h2>
      <div className="grid lg:grid-cols-4 gap-4 mb-8">
        {horror.length > 0  ?(
          horror.map((element) => {
            return (
              <div key={element.id} className="bg-white p-4 rounded-lg shadow-md"> 
              <h3 className="text-lg font-bold mb-2 text-center">{element.attributes.title}</h3>
              
                  <img src={`http://localhost:1337${element.attributes.image.data[0].attributes.url }`}
                  alt={element.attributes.title}
                  className=" flex w-full h-80 object-cover rounded-lg mb-4"/>

                  <p className="text-black hover:underline text-center">Watch Trailer</p>

           
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
