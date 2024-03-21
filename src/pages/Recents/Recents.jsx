import React from "react";
import "./Recents.css";
import BookCard from "../../components/BookCard/BookCard";

export default function Recents() {
    let recents = localStorage.getItem("recents");
    if (recents === null) {
        recents = [];
    } else {
        recents = JSON.parse(recents);
    }

    let books = recents.map((book) => {
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
            />
        );
    });

    return (
        <div className="Recents">
            <h1 className="recents-heading">RECENTLY VIEWED</h1>
            <div className="recents-bookCards">
                {books.length > 0 ? (
                    books
                ) : (
                    <h2 className="recents-empty">No recents yet!</h2>
                )}
            </div>
        </div>
    );
}
