import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "./ExpandedCard.css";

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
    key,
    onClose,
}) {
    const [open, setOpen] = React.useState(true);

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    const handleClose = () => {
        setOpen(false);
        onClose();
    };

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
                            <div className="favourites">
                                <button>Add to Favourites</button>
                            </div>
                            <div className="close">
                                <button onClick={handleClose}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </React.Fragment>
    );
}
