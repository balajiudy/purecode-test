import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { blue, pink, indigo } from "@mui/material/colors";

const blueColor = blue[500];
const pinkColor = pink[500];
const indigoColor = indigo[800];

export default function Card2() {
  return (
    <Card
      sx={{
        minWidth: 370,
        maxHeight: 250,
        boxShadow: "0px 0px 17px 0px #bfbebe94",
      }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Our Office
        </Typography>
        <Typography
          variant="caption"
          component="div"
          sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
          <LocationOnIcon />
          <span>488,blingu road,JP Street, NJ, California</span>
        </Typography>
        <hr />
        <Typography
          variant="caption"
          component="div"
          sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
          <CallIcon />
          <span>+01-992856-8535</span>
        </Typography>
        <hr />

        <Typography
          variant="caption"
          component="div"
          sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
          <EmailOutlinedIcon />
          <span>bob.builder@jobportal.com</span>
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="medium"
          variant="contained"
          sx={{
            minWidth: "20px",
            borderRadius: "50px",
            padding: "6px",
            backgroundColor: blueColor,
          }}>
          <TwitterIcon sx={{ fontSize: "large" }} />
        </Button>
        <Button
          size="medium"
          variant="contained"
          sx={{
            minWidth: "20px",
            borderRadius: "50px",
            padding: "6px",
            backgroundColor: indigoColor,
          }}>
          <FacebookIcon sx={{ fontSize: "large" }} />
        </Button>
        <Button
          size="medium"
          variant="contained"
          sx={{
            minWidth: "20px",
            borderRadius: "50px",
            padding: "6px",
            backgroundColor: pinkColor,
          }}>
          <InstagramIcon sx={{ fontSize: "large" }} />
        </Button>
        <Button
          size="medium"
          variant="contained"
          sx={{
            minWidth: "20px",
            borderRadius: "50px",
            padding: "6px",
            backgroundColor: blueColor,
          }}>
          <LinkedInIcon sx={{ fontSize: "large" }} />
        </Button>
      </CardActions>
    </Card>
  );
}
