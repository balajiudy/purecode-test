import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img from "../../images/Beach.jpg";
import { Avatar, CardMedia } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
    •
  </Box>
);

export default function Card3() {
  return (
    <Card
      sx={{
        margin: 0,
        minWidth: 450,
        minHeight: 270,
        boxShadow: "0px 0px 17px 0px #bfbebe94",
        borderRadius: "10px",
        position: "relative",
      }}>
      <CardMedia component="img" alt="green iguana" height="230" image={img} />

      <Avatar sx={{ position: "absolute", bottom: "8px", left: "20px" }}>
        H
      </Avatar>
      <CardActions
        sx={{ justifyContent: "flex-end", gap: 7, marginTop: "5px" }}>
        <Button variant="text" sx={{ height: "10px", color: "purple" }}>
          <FavoriteBorderOutlinedIcon />
        </Button>
        <Button variant="text" sx={{ height: "10px", color: "purple" }}>
          <ChatBubbleOutlineOutlinedIcon />
        </Button>
        <Button variant="text" sx={{ height: "10px", color: "purple" }}>
          <InsertLinkOutlinedIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
