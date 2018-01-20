import "./Search.css";
import React from "react";

const Search = () => {
  return (
    <div>
      <div className="topnav">
        <div id="custom-search-input">
          <div className="input-group col-md-12">
            <input
              type="text"
              className="form-control input-lg"
              placeholder="Search..."
            />

            <span className="input-group-btn">
              <button
                className="btn btn-info btn-lg"
                type="button"
                //onClick={props.click}
              >
                <i className="glyphicon glyphicon-search" />
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
