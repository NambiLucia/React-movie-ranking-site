import React, { useState, useEffect } from "react";

function Thriller() {
  const [thriller, setThriller] = useState([]);

  function fetchData() {
    let url = "http://localhost:1337/api/thrillers?populate=*";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((obj) => {
        let thrillerData = obj.data;
        setThriller(thrillerData);
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
      <h2 className="text-custom-red text-center mb-4">THRILLER MOVIE COLLECTION</h2>
      <div className="grid lg:grid-cols-4 gap-4 mb-8">
        {thriller.length > 0 ?(
          thriller.map((element) => {
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







    </div>
  );
}
export default Thriller;
