import React from "react";
import "./Form.css";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { library } from "@fortawesome/fontawesome-svg-core";
//import { faSearch } from "@fortawesome/free-solid-svg-icons";
//library.add(faSearch);

export default function Form() {
  return (
    <div className="search-form">
      <form className="mb-3">
        <div className="row">
          <div className="col-10">
            <input
              type="search"
              placeholder="Enter location"
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-2">
            <button className=" col-2 btn btn-outline-primary">
              {/* <FontAwesomeIcon icon="search" /> */} "S"
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
