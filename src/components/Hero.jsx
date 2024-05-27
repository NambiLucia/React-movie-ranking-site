import React from "react";

function Hero() {
  return (
    <div className="bg-black text-white">
      <div>
        <h1 className="text-custom-red text-center py-4">Chill and Thrill Cinema</h1>

        <p className="text-center m-8">
          <span>
            <em>Chill & Thrill Cinema</em>{" "}
          </span>
          is a platform for fans of all things horror, thriller, and true-crime
          documentaries.
          <br />
          Its dedicated to helping movie enthusiasts discover the best and most
          thrilling films in these genres.
          <br />
          Our curated rankings will guide you to the must-watch movies, ensuring
          you have a spine-tingling viewing experience every time. <br />
          Join us at Chill & Thrill Cinema and embark on a cinematic journey
          like no other.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <img
          src="\images\backdrop-image.jpg"
          alt="horror scene"
          className="w-11/12 h-1/4 border-none rounded-[1em]"
        />
      </div>
    </div>
  );
}
export default Hero;
