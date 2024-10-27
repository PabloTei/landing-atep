// src/components/DrawerMenu.js
import React, { useState } from "react";
import { FaHome, FaCog, FaInfoCircle, FaEnvelope } from "react-icons/fa";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import AnimatedHamburgerButton from "../ui/ButtonMenu";

const DrawerMenu = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  const sectionLinks = [
    { text: "Inicio", id: "home", icon: <FaHome /> },
    { text: "Servicios", id: "services", icon: <FaCog /> },
    { text: "Sobre Nosotros", id: "about", icon: <FaInfoCircle /> },
    { text: "Contacto", id: "contact", icon: <FaEnvelope /> },
  ];

  const DrawerList = (
    <Box sx={{ width: 240 }} role="presentation" onClick={toggleDrawer}>
      <List>
        {sectionLinks.map(({ text, id, icon }) => (
          <ListItem key={id} disablePadding>
            <ListItemButton component="a" href={`#${id}`}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AnimatedHamburgerButton open={drawerOpen} toggleDrawer={toggleDrawer} />
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default DrawerMenu;
