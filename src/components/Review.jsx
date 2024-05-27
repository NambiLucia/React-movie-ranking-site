import React from "react";
import { useState, useEffect } from "react";

function Review() {
  const [review, setReview] = useState([]);
  function fetchData() {
    let url = "http://localhost:1337/api/reviews?populate=*";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((obj) => {
        let reviewObj = obj.data;
        setReview(reviewObj);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-8 bg-custom-grey">
      <h4 className="text-2xl font-bold mb-8 text-center text-custom-yellow">
        WHAT PEOPLE ARE SAYING ABOUT US
      </h4>
      <div className="grid lg:grid-cols-3 gap-10 ">
        {review.length > 0 ? (
          review.map((element) => {
            return (
              <div
                key={element.id}
                className="grid-cols-3"
              >
                <div className="mb-4 text-white" >
                
                  {element.attributes.Text}
                  <br />
               <span className="font-semibold text-custom-yellow">{element.attributes.Name} </span> 
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center">Loading.....</p>
        )}
      </div>
    </div>
  );
}
export default Review;
