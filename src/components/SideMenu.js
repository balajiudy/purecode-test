import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";
import { purple } from "@mui/material/colors";

import GraphicEqOutlinedIcon from "@mui/icons-material/GraphicEqOutlined";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import TopicOutlinedIcon from "@mui/icons-material/TopicOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DragIndicatorOutlinedIcon from "@mui/icons-material/DragIndicatorOutlined";

import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import { Link } from "react-router-dom";

const purplecolor = purple[500];

const listItem = (heading, list) => (
  <>
    <Typography className="MuiList-subheader" variant="caption">
      {heading}
    </Typography>
    <List>
      {list.map((item, index) => (
        <ListItem key={item.name} disablePadding>
          <Link to={`/${item.name.toLowerCase()}`} className="sideMenuAnchor">
            <ListItemButton
              sx={{
                borderStartEndRadius: "50px",
                borderBottomRightRadius: "50px",
                "&:hover": {
                  color: "#4a148c",
                  background: "#f3e5f5",
                  borderLeft: "2px solid #4a148c",
                },
                "&:focus": {
                  color: "#4a148c",
                  background: "#f3e5f5",
                  borderLeft: "2px solid #4a148c",
                },
              }}>
              <ListItemIcon
                sx={{
                  "&:hover": {
                    color: "#4a148c",
                  },
                }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </Link>
        </ListItem>
      ))}
    </List>
  </>
);

export default function SideMenu() {
  return (
    <div className="sideMenu_div">
      <div className="titeleSideMenu">
        <Typography className="MuiList-subheader" variant="h5">
          jumbo
        </Typography>
        <MenuOpenOutlinedIcon />
      </div>

      <Box
        sx={{
          width: 150,
        }}
        role="presentation">
        {listItem("HOME", [
          { name: "Misc", icon: <GraphicEqOutlinedIcon /> },
          { name: "Crypto", icon: <CurrencyExchangeIcon /> },
          { name: "Listing", icon: <ListAltIcon /> },
          { name: "Crm", icon: <SupportAgentIcon /> },
          { name: "Intranet", icon: <PieChartOutlineIcon /> },
          { name: "eCommerce", icon: <ShoppingCartOutlinedIcon /> },
          { name: "News", icon: <NewspaperOutlinedIcon /> },
        ])}
        {listItem("APP", [
          { name: "Chat", icon: <ChatOutlinedIcon /> },
          { name: "Contact", icon: <ContactsOutlinedIcon /> },
          { name: "Mail", icon: <EmailOutlinedIcon /> },
        ])}
        {listItem("CARD", [
          { name: "Widget", icon: <WidgetsOutlinedIcon /> },
          { name: "Merix", icon: <BarChartOutlinedIcon /> },
        ])}
        {listItem("COMPONENT", [
          { name: "MaterialUI", icon: <TopicOutlinedIcon /> },
        ])}
        {listItem("EXTENSION", [
          { name: "Editor", icon: <EditOutlinedIcon /> },
          { name: "Drag n Drop", icon: <DragIndicatorOutlinedIcon /> },
        ])}
      </Box>
    </div>
  );
}
