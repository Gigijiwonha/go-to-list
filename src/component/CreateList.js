import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";

function CreateList() {
  const dispatch = useDispatch();
  const [place, setPlace] = useState("");
  const [placeName, setPlaceName] = useState("");
  const [suburb, setSuburb] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [keywords, setKeywords] = useState("");
  const [comments, setComments] = useState("");

  const createListData = (event) => {
    event.preventDefault();
    dispatch({
      type: "CREATE_LIST_DATA",
      payload: { place, placeName, suburb, detailAddress, keywords, comments },
    });
    setPlace("");
    setPlaceName("");
    setSuburb("");
    setDetailAddress("");
    setKeywords("");
    setComments("");
  };

  return (
    <div>
      <Form onSubmit={(event) => createListData(event)}>
        <Form.Group className="mb-3" controlId="formCategory">
          <Form.Label>Select Place Type</Form.Label>
          <Form.Select
            onChange={(event) => setPlace(event.target.value)}
            value={place}
          >
            <option value={""}>Select the place</option>
            <option value={"Cafe"}>Cafe</option>
            <option value={"Restaurant"}>Restaurant</option>
            <option value={"Bar"}>Bar</option>
            <option value={"Other"}>Other</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPlaceName">
          <Form.Label>Place Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter place name"
            onChange={(event) => setPlaceName(event.target.value)}
            value={placeName}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formSuburb">
          <Form.Label>Suburb</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter suburb"
            onChange={(event) => setSuburb(event.target.value)}
            value={suburb}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDetailAddress">
          <Form.Label>Detail Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter detailed address"
            onChange={(event) => setDetailAddress(event.target.value)}
            value={detailAddress}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formKeywords">
          <Form.Label>Keywords</Form.Label>
          <Form.Control
            type="text"
            placeholder="e.g., Matcha, Beach Cafe, etc."
            onChange={(event) => setKeywords(event.target.value)}
            value={keywords}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formComment">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter any comments"
            onChange={(event) => setComments(event.target.value)}
            value={comments}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Create
        </Button>
      </Form>
    </div>
  );
}

export default CreateList;
