import { AppBar, Toolbar, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";


const Navbar = () => {

    return (
        <div >
            <AppBar position="static" color='secondary'  >
                <Toolbar style={{ display: "flex", justifyContent: "center" }}>
                    <Stack direction={"row"} spacing={2} color="white" >
                        <Link to="/" >
                            <Typography color="white">Home</Typography>
                        </Link>

                        <Typography color="white">Add Post</Typography>

                        <Link to="/about" color="secondary">
                            <Typography color="white">About</Typography>
                        </Link>

                    </Stack>
                </Toolbar>
            </AppBar>
        </div >
    );
};

export default Navbar;