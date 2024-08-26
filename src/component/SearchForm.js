import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";

function SearchForm() {
  const [searchByKeywords, setSearchByKeywords] = useState("");
  const dispatch = useDispatch();

  const sendKeywords = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_BY_KEYWORDS", payload: { searchByKeywords } });
  };

  return (
    <div>
      <Form onSubmit={sendKeywords} className="search-section">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"/>
        <Form.Control
          type="text"
          placeholder="Search by keywords"
          onChange={(event) => setSearchByKeywords(event.target.value)}
          value={searchByKeywords}
          className="search-box"
        />
        <Button type="submit">Search</Button>
      </Form>
    </div>
  );
}

export default SearchForm;
