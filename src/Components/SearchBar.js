import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <Form inline="true" onSubmit={handleSearch} className="search-bar">
      <Form.Control
        type="text"
        placeholder="Search for news..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button type="submit" variant="primary" className="ml-2">
        Search
      </Button>
    </Form>
  );
};

export default SearchBar;
