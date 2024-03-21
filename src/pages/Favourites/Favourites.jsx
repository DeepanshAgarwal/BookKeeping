import React, { useState } from "react";
import "./Favourites.css";
import BookCard from "../../components/BookCard/BookCard";

export default function Favourites() {
    const [favReRender, setFavReRender] = useState(false);

    function triggerRerender() {
        setFavReRender(!favReRender);
    }

    let favoutiteBooks = localStorage.getItem("favourites");
    if (favoutiteBooks === null) {
        favoutiteBooks = [];
    } else {
        favoutiteBooks = JSON.parse(favoutiteBooks);
    }

    let books = favoutiteBooks.map((book) => {
        return (
            <BookCard
                key={book.isbn}
                title={book.title}
                author={book.author}
                pages={book.pageCount}
                categories={book.categories}
                summary={book.summary}
                url={book.url}
                isbn={book.isbn}
                favReRender={triggerRerender}
            />
        );
    });

    return (
        <div className="Favourites">
            <h1 className="favourites-heading">FAVOURITE BOOKS</h1>
            <div className="favourite-bookCards">
                {books.length > 0 ? (
                    books
                ) : (
                    <h2 className="favourites-empty">No favourites yet!</h2>
                )}
            </div>
        </div>
    );
}
