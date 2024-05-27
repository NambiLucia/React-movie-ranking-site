import React from "react";

function Category() {
  return (
    <div>
      <h2 className="text-custom-red text-center">Category</h2>
      <p className="text-custom-red text-center">
        Check these out<span>&darr;&darr;</span>
      </p>

      <ul className="text-center">
        <a href="" target="_blank">
          <li>Horror</li>
        </a>
        <a href="" target="_blank">
          <li>Thriller</li>
        </a>
        <a href="" target="_blank">
          <li>True-crime Documentaries</li>
        </a>
      </ul>
    </div>
  );
}
export default Category;
