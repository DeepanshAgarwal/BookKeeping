import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import SnackbarContent from "@mui/material/SnackbarContent";

export default function CustomSnackbar({ message, duration }) {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        if (message && duration) {
            setOpen(true);
        }
    }, [message, duration]);

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    return (
        <div>
            <Snackbar
                open={open}
                autoHideDuration={duration || 5000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            >
                <SnackbarContent
                    message={message}
                    sx={{
                        backgroundColor: "#D8DEE9",
                        color: "#2E3440",
                        // borderRadius: "10px",
                    }}
                />
            </Snackbar>
        </div>
    );
}
