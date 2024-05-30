import React, { useState, useEffect } from "react";

function Hero() {
  const [hero, setHero] = useState([]);

  function fetchdata() {
    const url = "http://localhost:1337/api/heroes?populate=*";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((obj) => {
        let heroObj = obj.data;
        setHero(heroObj);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="bg-black text-white">
      <div>
        <h1 className="text-custom-red text-center py-4">
          Chill and Thrill Cinema
        </h1>
        <p className="text-center m-8">
          <span>
            <em>Chill & Thrill Cinema</em>
          </span>{" "}
          is a platform for fans of all things horror, thriller, and true-crime
          documentaries.
          <br />
          It's dedicated to helping movie enthusiasts discover the best and most
          thrilling films in these genres.
          <br />
          Our curated rankings will guide you to the must-watch movies, ensuring
          you have a spine-tingling viewing experience every time.
          <br />
          Join us at Chill & Thrill Cinema and embark on a cinematic journey
          like no other.
        </p>
      </div>

      <div>
        {hero.length > 0 ? (
          hero.map((element) => (
            <div key={element.id} className="flex justify-center">
              <img
                src={`http://localhost:1337${element.attributes.image.data[0].attributes.url}`}
                alt="hero"
                className="text-center h-150 rounded-lg"
              />
            </div>

          ))
        ) : (
          <p className="text-center text-custom-yellow">Loading....</p>
        )}
      </div>
    </div>
  );
}

export default Hero;
