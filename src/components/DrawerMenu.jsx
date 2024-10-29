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
import { motion } from "framer-motion";

const DrawerMenu = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  const sectionLinks = [
    { text: "Home", id: "home", icon: <FaHome /> },
    { text: "Services", id: "services", icon: <FaCog /> },
    { text: "About us", id: "about", icon: <FaInfoCircle /> },
    { text: "Contact", id: "contact", icon: <FaEnvelope /> },
  ];

  const DrawerList = (
    <Box sx={{ width: 240 }} role="presentation" onClick={toggleDrawer}>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
      >
        <List>
          {sectionLinks.map(({ text, id, icon }) => (
            <ListItem key={id} disablePadding>
              <ListItemButton className="text-xl" component="a" href={`#${id}`}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </motion.div>
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
