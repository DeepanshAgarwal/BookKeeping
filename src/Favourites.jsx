import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import "./Favourites.css";
import { favouriteBooks } from "./favouritesData";
import Card from "./Card";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Favourites({ onClose }) {
    const [open, setOpen] = React.useState(true);

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    const handleClose = () => {
        setOpen(false);
        onClose();
    };

    const cards = favouriteBooks.map((book, key) => {
        return (
            <Card
                key={key}
                id={key}
                title={book.title}
                author={book.author}
                pages={book.pageCount}
                categories={book.categories}
                summary={book.summary}
                url={book.coverPageUrl}
                isbn={book.isbn}
            />
        );
    });

    return (
        <React.Fragment>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <div className="Favourites">
                    <h1>Favourites</h1>
                    <div className="favouriteBooks">
                        {favouriteBooks.length === 0 ? (
                            <p>No favourite books</p>
                        ) : (
                            cards
                        )}
                    </div>
                </div>
            </Dialog>
        </React.Fragment>
    );
}
