import React from "react";
import "./Form.css";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
