import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Truecrime() {
  const [truecrime, setTruecrime] = useState([]);

  function fetchData() {
    let url = "http://localhost:1337/api/truecrimes?populate=*";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((obj) => {
        let truecrimeData = obj.data;
        setTruecrime(truecrimeData);
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
      <h2 className="text-custom-red text-center mb-4 font-Nosifer text-4xl pt-32 pb-8 bg-black">TRUE-CRIME DOCUMENTARY COLLECTION</h2>
      <div className="grid lg:grid-cols-4 gap-4 mb-8">
        {truecrime.length > 0 ?(
          truecrime.map((element) => {
            return (
              <div key={element.id} className="bg-black p-4 rounded-lg shadow-md"> 
              <h3 className="text-lg font-bold mb-2 text-center text-custom-red">{element.attributes.title}</h3>
              
                  <img src={`http://localhost:1337${element.attributes.image.data[0].attributes.url }`}
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
export default Truecrime;
