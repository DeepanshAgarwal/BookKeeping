import React, { useState } from "react";
import "./Card.css";
import ExpandedCard from "./ExpandedCard";

export default function Card({
    title,
    author,
    pages,
    categories,
    url,
    summary,
    id,
    isbn,
    favourite,
}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isFavourite, setIsFavourite] = useState(favourite);

    function handleCardClick() {
        setIsExpanded(true);
    }

    function handleExpandedCardClose() {
        setIsExpanded(false);
    }

    function toggleFavourite() {
        setIsFavourite(!isFavourite);
    }

    return (
        <div className="card" id={id}>
            <div className="visible" onClick={handleCardClick}>
                <div className="image">
                    <img src={url} alt={title} />
                </div>
                <div className="title">
                    <p>{title}</p>
                </div>
                <div className="author">
                    <p>{author}</p>
                </div>
            </div>

            {isExpanded && (
                <ExpandedCard
                    title={title}
                    author={author}
                    pages={pages}
                    url={url}
                    categories={categories}
                    summary={summary}
                    key={id}
                    isbn={isbn}
                    favourite={isFavourite}
                    toggleFavourite={toggleFavourite}
                    onClose={handleExpandedCardClose}
                />
            )}

            {/* {
                <div className="hidden">
                    <div className="hidden-title">
                        <p>{title}</p>
                    </div>
                    <div className="hidden-author">
                        <p>
                            <b>Author:</b> {author}
                        </p>
                    </div>
                    <div className="hidden-summary">
                        <p>
                            <b>Summary:</b> {summary}
                        </p>
                    </div>
                    <div className="hidden-categories">
                        <p>
                            <b>Categories:</b> {categories}
                        </p>
                    </div>
                    <div className="hidden-pages">
                        <p>
                            <b>Page: </b> Count: {pages}
                        </p>
                    </div>
                </div>
            } */}
        </div>
    );
}
