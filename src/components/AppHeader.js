import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";

const color = grey[900];

export default function AppHeader() {
  return (
    <Box sx={{ height: "42px" }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: color,
          height: "42px",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}>
        <Typography>
          envato<span>market</span>
        </Typography>
        <Link to="/buynow">
          <Button
            variant="contained"
            color="success"
            size="small"
            sx={{ textDecoration: "none" }}>
            Buy Now
          </Button>
        </Link>
      </AppBar>
    </Box>
  );
}
