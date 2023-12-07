import React from "react";
import "./search-bar.css";
import { Col, Form, FormGroup } from "reactstrap";

const SearchBar = () => {
  return (
    <Col lg="12">
      <div className="search__bar">
        <form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i class="ri-map-pin-line"></i>
              <div>
                <h6>Location</h6>
                <input type="text" placeholder="Where are you going?" />
              </div>
            </span>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
            <i class="ri-roadster-line"></i>
              <div>
                <h6>Distance</h6>
                <input type="number" placeholder="Distance in km/h" />
              </div>
            </span>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-last">
            <span>
            <i class="ri-group-line"></i>
              <div>
                <h6>Max people</h6>
                <input type="number" placeholder="0" />
              </div>
            </span>
          </FormGroup>
        </form>
      </div>
    </Col>
  );
};

export default SearchBar;
