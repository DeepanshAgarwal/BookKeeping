import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

const data = [];

function Media(props) {
    const { loading = false } = props;

    return (
        <div className="placeholder-wrapper">
            <Skeleton
                width="50%"
                height={60}
                sx={{ marginLeft: "60px", marginTop: "20px" }}
            />
            <Grid
                container
                wrap="wrap"
                sx={{
                    paddingLeft: "60px",
                }}
            >
                {(loading ? Array.from(new Array(14)) : data).map(
                    (item, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: 200,
                                height: 300,
                                marginRight: 0.5,
                                my: 5,
                            }}
                        >
                            {item ? (
                                <img
                                    style={{ width: 172, height: 262.5 }}
                                    alt={item.title}
                                    src={item.src}
                                />
                            ) : (
                                <Skeleton
                                    variant="rectangular"
                                    width={172}
                                    height={262.5}
                                />
                            )}

                            {item ? (
                                <Box sx={{ pr: 2 }}>
                                    <Typography gutterBottom variant="body2">
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        display="block"
                                        variant="caption"
                                        color="text.secondary"
                                    >
                                        {item.channel}
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        color="text.secondary"
                                    >
                                        {`${item.views} • ${item.createdAt}`}
                                    </Typography>
                                </Box>
                            ) : (
                                <Box sx={{ pt: 0.5 }}>
                                    <Skeleton width="80%" height={40} />
                                    <Skeleton width="60%" />
                                </Box>
                            )}
                        </Box>
                    )
                )}
            </Grid>
        </div>
    );
}

Media.propTypes = {
    loading: PropTypes.bool,
};

export default function YouTube() {
    return (
        <Box sx={{ overflow: "hidden" }}>
            <Media loading />
            <Media />
        </Box>
    );
}
