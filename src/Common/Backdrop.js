import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const LoaderBackdrop = ({ statusMessage, error, open }) => {
    return (
        <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1, display: "flex", flexDirection: "column" }} open={open}>
            <CircularProgress color="inherit" sx={{ marginBottom: "30px" }} />
            <div>{statusMessage}</div>
            {error && <div>{error}</div>}
        </Backdrop>
    )
}

export default LoaderBackdrop;