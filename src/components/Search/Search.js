import React from "react";
import "./Search.css";

// bootstrap

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap";

const Search = () => {
  return (
    <div class="video-container">
  <div class="search-container">
     <input type="text" className="search-input" placeholder="Search by City, Location, Project..." />
        <button className="search-button">Search</button>
    <h3 className="invitation"> An Invitation To You To Live In The Place Like Heaven
 </h3>
  </div>
</div>

  );
};

export default Search;
