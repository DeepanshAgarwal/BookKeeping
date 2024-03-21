import React, { useEffect, useState } from "react";
import "./Search.css";
import { fetchBookByTitle, getRefinedData } from "../../utils/API";
import BookCard from "../../components/BookCard/BookCard";

export default function Search({ searchQuery }) {
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        async function fetchData(query) {
            try {
                const results = await fetchBookByTitle(query);
                setSearchResults(results);
            } catch (error) {
                console.error("Failed to fetch books:", error);
            }
        }

        fetchData(searchQuery);
    }, [searchQuery]);

    let books = Array.isArray(searchResults)
        ? searchResults.map((book, key) => {
              let refinedData = getRefinedData(book);
              return (
                  <BookCard
                      key={refinedData.isbn}
                      title={refinedData.title}
                      author={refinedData.author}
                      pages={refinedData.pageCount}
                      categories={refinedData.categories}
                      summary={refinedData.summary}
                      url={refinedData.coverPageUrl}
                      isbn={refinedData.isbn}
                  />
              );
          })
        : [];

    return (
        <div className="Search">
            <h1 className="search-heading">
                Showing results for "{searchQuery}"
            </h1>
            <div className="search-results">{books}</div>
        </div>
    );
}
