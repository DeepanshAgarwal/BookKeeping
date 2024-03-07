import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import "./ExpandedCard.css";
import { addToFavourites, removeFromFavourites } from "./favouritesData";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ExpandedCard({
    title,
    author,
    pages,
    categories,
    url,
    summary,
    isbn,
    onClose,
    favourite,
    toggleFavourite,
}) {
    const [open, setOpen] = React.useState(true);
    // const [isFavourite, setIsFavourite] = React.useState(
    //     getCurrentBook().favourite
    // );

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    const handleClose = () => {
        setOpen(false);
        onClose();
    };

    function getCurrentBook() {
        return {
            title: title,
            author: author,
            pageCount: pages,
            coverPageUrl: url,
            categories: categories,
            summary: summary,
            isbn: isbn,
            favourite: favourite,
        };
    }

    function updateFavourites() {
        let currentBook = getCurrentBook();
        if (currentBook.favourite == true) {
            currentBook.favourite = false;
            removeFromFavourites(currentBook);
        } else {
            currentBook.favourite = true;
            addToFavourites(currentBook);
        }
        toggleFavourite();
    }

    return (
        <React.Fragment>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                // disableBackdropClick
            >
                <div className="close-button">
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                </div>
                <div className="allInfo">
                    <div className="allInfo-image">
                        <img src={url} alt={title} />
                    </div>
                    <div className="allInfo-content">
                        <div className="allInfo-title">
                            <p>{title}</p>
                        </div>
                        <div className="allInfo-author">
                            <p>
                                <b>Author:</b> {author}
                            </p>
                        </div>
                        <div className="allInfo-summary">
                            <p>
                                <b>Summary:</b> {summary}
                            </p>
                        </div>
                        <div className="allInfo-categories">
                            <p>
                                <b>Categories:</b> {categories}
                            </p>
                        </div>
                        <div className="allInfo-pages">
                            <p>
                                <b>Page Count: </b>
                                {pages}
                            </p>
                        </div>
                        <div className="allInfo-isbn">
                            <p>
                                <b>ISBN: </b>
                                {isbn}
                            </p>
                        </div>
                        <div className="allInfo-buttons">
                            {favourite == false ? (
                                <div className="favourites button">
                                    <button onClick={updateFavourites}>
                                        Add to Favourites
                                    </button>
                                </div>
                            ) : (
                                <div className="favourites button">
                                    <button onClick={updateFavourites}>
                                        Remove from Favourites
                                    </button>
                                </div>
                            )}
                            <div className="close button">
                                <button onClick={handleClose}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </React.Fragment>
    );
}
