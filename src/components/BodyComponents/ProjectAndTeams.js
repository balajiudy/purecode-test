import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { Avatar, AvatarGroup, LinearProgress } from "@mui/material";

function LinearProgressWithLabel(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "10px",
      }}>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
      <Box sx={{ width: "100%", mr: 1, marginBottom: "10px" }}>
        <LinearProgress variant="determinate" value={props.value} />
      </Box>
    </Box>
  );
}

export default function ProjectAndTeams() {
  return (
    <Box
      sx={{
        width: 300,
        height: 250,
        backgroundColor: "#fff",
        padding: "10px",
        borderRadius: "10px",
        margin: "0px 15px",
        minHeight: "340px",
        boxShadow: "0px 0px 17px 0px #bfbebe94",
        display: "flex",
        gap: "10px",
        flexDirection: "column",
        alignItems: "flex-start",
      }}>
      <Typography>Projects and Teams</Typography>
      <Chip
        label="Development"
        sx={{ backgroundColor: "#7352c2", color: "#fff", height: "22px" }}
      />
      <Box>
        <Typography variant="caption">
          New UI design for project jumbo
        </Typography>
        <LinearProgressWithLabel value={70} />
        <AvatarGroup max={4} sx={{ justifyContent: "flex-end" }}>
          <Avatar>A</Avatar>
          <Avatar>B</Avatar>
          <Avatar>C</Avatar>
          <Avatar>D</Avatar>
          <Avatar>E</Avatar>
        </AvatarGroup>
      </Box>
      <Chip
        label="Designing"
        sx={{ backgroundColor: "#09d0a1", color: "#fff", height: "22px" }}
      />
      <Box>
        <Typography variant="caption">
          Promo graphics design for widly
        </Typography>
        <LinearProgressWithLabel value={60} />
        <AvatarGroup max={4} sx={{ justifyContent: "flex-end" }}>
          <Avatar>A</Avatar>
          <Avatar>B</Avatar>
          <Avatar>C</Avatar>
          <Avatar>D</Avatar>
          <Avatar>E</Avatar>
        </AvatarGroup>
      </Box>
      <Chip
        label="Marketing"
        sx={{ backgroundColor: "#ee2e4a", color: "#fff", height: "22px" }}
      />
    </Box>
  );
}
