import React, { useState } from "react";
import "./BookCard.css";
import BookCardExpanded from "../BookCardExpanded/BookCardExpanded";

export default function BookCard({
    title,
    author,
    pages,
    categories,
    url,
    summary,
    isbn,
    favReRender = false,
}) {
    const [isExpanded, setIsExpanded] = useState(false);

    let currentBook = {
        title: title,
        author: author,
        pages: pages,
        categories: categories,
        url: url,
        summary: summary,
        isbn: isbn,
    };

    function handleCardClick() {
        setIsExpanded(true);

        if (!localStorage.getItem("recents")) {
            localStorage.setItem("recents", JSON.stringify([]));
        }
        let recents = localStorage.getItem("recents");
        if (recents) {
            recents = JSON.parse(recents);
        } else {
            recents = [];
        }
        // Add the current book to the start of the recents array
        recents.unshift(currentBook);

        // Remove duplicates based on isbn
        recents = recents.reduce((unique, book) => {
            return unique.some((b) => b.isbn === book.isbn)
                ? unique
                : [...unique, book];
        }, []);
        recents = recents.slice(0, 50);

        localStorage.setItem("recents", JSON.stringify(recents));
    }

    function handleExpandedCardClose() {
        setIsExpanded(false);
    }

    return (
        <div className="BookCard" id={isbn}>
            <div className="bookcard-content" onClick={handleCardClick}>
                <div className="bookcard-image">
                    <img src={url} alt={title} />
                </div>
                <div className="bookcard-title">
                    <p>{title}</p>
                </div>
                <div className="bookcard-author">
                    <p>{author}</p>
                </div>
            </div>

            {isExpanded && (
                <BookCardExpanded
                    title={title}
                    author={author}
                    pages={pages}
                    url={url}
                    categories={categories}
                    summary={summary}
                    key={isbn}
                    isbn={isbn}
                    onClose={handleExpandedCardClose}
                    favReRender={favReRender}
                />
            )}
        </div>
    );
}
