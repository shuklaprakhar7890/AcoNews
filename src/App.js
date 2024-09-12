import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import ArticleList from "./Components/ArticleList";
import PaginationComponent from "./Components/Pagination";
import { Container } from "react-bootstrap";
import "./App.css";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [query, setQuery] = useState("latest");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://localhost:5000/api/news?q=${query}&page=${currentPage}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data && data.articles) {
          setArticles(data.articles || []);
          setTotalPages(data.totalPages || 1);
        } // Assuming 10 articles per page
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchArticles();
  }, [query, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setCurrentPage(1); // Reset to first page on new search
  };

  return (
    <div className="app-container">
      <Header />
      <Container>
        <SearchBar onSearch={handleSearch} />
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <ArticleList articles={articles} />
        <PaginationComponent
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </Container>
    </div>
  );
};

export default App;
