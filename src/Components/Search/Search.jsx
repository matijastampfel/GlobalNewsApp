import "./Search.css";
import React from "react";

const Search = props => {
  return (
    <div>
      <div className="topnav">
        <div id="custom-search-input">
          <div className="input-group col-md-12">
            <input
              type="text"
              className="form-control input-lg"
              placeholder="Search..."
              onChange={props.changed}
              value={props.search}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
