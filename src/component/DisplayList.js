import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";

function DisplayList() {
  const listItem = useSelector((state) => state.listItem);
  const searchByKeywords = useSelector((state) => state.searchByKeywords);

  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (searchByKeywords == "") {
      setFilteredList(listItem);
    } else {
      let list = listItem.filter(
        (item) =>
          item.place.toLowerCase().includes(searchByKeywords.toLowerCase()) ||
          item.placeName
            .toLowerCase()
            .includes(searchByKeywords.toLowerCase()) ||
          item.suburb.toLowerCase().includes(searchByKeywords.toLowerCase()) ||
          item.detailAddress
            .toLowerCase()
            .includes(searchByKeywords.toLowerCase()) ||
          item.keywords
            .toLowerCase()
            .includes(searchByKeywords.toLowerCase()) ||
          item.comments.toLowerCase().includes(searchByKeywords.toLowerCase())
      );
      setFilteredList(list);
    }
  }, [listItem, searchByKeywords]);

  return (
    <div>
      <SearchForm />
      {filteredList.map((item) => (
        <ListItem item={item} />
      ))}
    </div>
  );
}

export default DisplayList;
