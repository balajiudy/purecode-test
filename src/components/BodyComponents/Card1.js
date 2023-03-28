import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";

import { purple } from "@mui/material/colors";

const color = purple[700];

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
    •
  </Box>
);

export default function Card1() {
  return (
    <Card
      sx={{
        minWidth: 280,
        maxHeight: 220,
        boxShadow: "0px 0px 17px 0px #bfbebe94",
      }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="medium"
          variant="contained"
          sx={{ minWidth: "20px", backgroundColor: color }}>
          <VolumeUpOutlinedIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
