import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CustomButton from "../CustomButton/CustomButton.jsx";
import CustomSnackbar from "../CustomSnackbar/CustomSnackbar.jsx";

import "./BookCardExpanded.css";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1000,
    height: 500,
    bgcolor: "#c2edce",
    boxShadow: 24,
};

export default function BookCardExpanded({
    title,
    author,
    pages,
    categories,
    url,
    summary,
    isbn,
    onClose,
    favReRender,
}) {
    const [open, setOpen] = React.useState(true);
    const [reRender, setReRender] = React.useState(false);
    const [snackbarMessage, setSnackbarMessage] = React.useState("");
    const [snackbarKey, setSnackbarKey] = React.useState(0);
    const handleClose = () => {
        setOpen(false);
        onClose();
    };

    let currentBook = {
        title: title,
        author: author,
        pages: pages,
        categories: categories,
        url: url,
        summary: summary,
        isbn: isbn,
    };

    function addToFavourites() {
        if (!localStorage.getItem("favourites")) {
            localStorage.setItem("favourites", JSON.stringify([]));
        }
        let favourites = localStorage.getItem("favourites");
        if (favourites) {
            favourites = JSON.parse(favourites);
        } else {
            favourites = [];
        }

        favourites.push(currentBook);
        localStorage.setItem("favourites", JSON.stringify(favourites));
        console.log("Book added to favourites");
        setSnackbarMessage("Book added to favourites");
        setSnackbarKey((prevKey) => prevKey + 1);
        // console.log(`Updated favourites: ${favourites}`);
        setReRender(!reRender);
    }

    function removeFromFavourites() {
        let favourites = localStorage.getItem("favourites");
        if (favourites) {
            favourites = JSON.parse(favourites);
        } else {
            favourites = [];
        }
        favourites = favourites.filter((book) => book.isbn !== isbn);
        localStorage.setItem("favourites", JSON.stringify(favourites));
        console.log("Book removed from favourites");
        setSnackbarMessage("Book removed from favourites");
        setSnackbarKey((prevKey) => prevKey + 1);
        setReRender(!reRender);
        favReRender();
    }

    let currentFavourites = localStorage.getItem("favourites");
    if (currentFavourites) {
        currentFavourites = JSON.parse(currentFavourites);
    } else {
        currentFavourites = [];
    }

    let isFavourite = currentFavourites.some((book) => book.isbn === isbn);

    return (
        <div className="BookCardExpended">
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <div className="bce">
                            <div className="bce-image">
                                <img src={url} alt={title} />
                            </div>
                            <div className="bce-content">
                                <div className="bce-title">
                                    <Typography variant="h4">
                                        {title}
                                    </Typography>
                                </div>
                                <div className="bce-author">
                                    <Typography variant="h6">
                                        <b>Author:</b> {author}
                                    </Typography>
                                </div>
                                <div className="bce-categories">
                                    <Typography variant="h6">
                                        <b>Categories:</b> {categories}
                                    </Typography>
                                </div>
                                <div className="bce-summary">
                                    <Typography variant="h6">
                                        <b>Summary:</b> {summary}
                                    </Typography>
                                </div>
                                <div className="bce-pages">
                                    <Typography variant="h6">
                                        <b>Page Count: </b>
                                        {pages}
                                    </Typography>
                                </div>
                                <div className="bce-isbn">
                                    <Typography variant="h6">
                                        <b>ISBN: </b>
                                        {isbn}
                                    </Typography>
                                </div>
                                <div className="bce-favourite">
                                    {isFavourite ? (
                                        <CustomButton
                                            onClick={removeFromFavourites}
                                            text="Remove from favourites"
                                        />
                                    ) : (
                                        <CustomButton
                                            onClick={addToFavourites}
                                            text="Add to favourites"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </Box>
                </Fade>
            </Modal>
            {/* <CustomSnackbar
                key={snackbarKey}
                message={snackbarMessage}
                duration={3000}
            /> */}
        </div>
    );
}
