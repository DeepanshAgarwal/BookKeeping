import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import SnackbarContent from "@mui/material/SnackbarContent";

export default function CustomSnackbar({ message, duration }) {
    const [open, setOpen] = React.useState(true);

    // React.useEffect(() => {
    //     setOpen(true);
    // }, []);

    // const handleClick = () => {
    //     setOpen(true);
    // };

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
            >
                <SnackbarContent
                    message={message}
                    sx={{
                        backgroundColor: "#D8DEE9", // Change the background color
                        color: "#2E3440", // Change the text color
                        // borderRadius: "10px", // Add border radius
                        // Add other styles as needed
                    }}
                />
            </Snackbar>
        </div>
    );
}
