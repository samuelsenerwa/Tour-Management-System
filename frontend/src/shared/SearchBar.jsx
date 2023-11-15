import React from "react";
import "./search-bar.css";
import { Col, Form, FormGroup } from "reactstrap";

const SearchBar = () => {
  return (
    <Col lg="12">
      <div className="search_bar">
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
              <i class="ri-map-pin-line"></i>
              <div>
                <h6>Location</h6>
                <input type="text" placeholder="Where are you going?" />
              </div>
            </span>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i class="ri-map-pin-line"></i>
              <div>
                <h6>Location</h6>
                <input type="text" placeholder="Where are you going?" />
              </div>
            </span>
          </FormGroup>
        </form>
      </div>
    </Col>
  );
};

export default SearchBar;
