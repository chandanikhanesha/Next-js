import React, { useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const drawerWidth = 240;
const navItems = ["Home", "About", "PrivacyPolicy", "Blogs"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const url = router.pathname.split("/")[1];
    console.log(url, "url");
    if (url !== "success" && url !== "subBlogs" && url) {
      document.getElementById(url).style.backgroundColor = "#192033";
      document.getElementById(url).style.color = "white";
    }
  }, []);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <div
          className={styles.logodiv}
          onClick={() =>
            router.push({
              pathname: "/",
            })
          }
        >
          <Image src="/Logo.jpg" alt="Logo" width={190} height={63}></Image>
        </div>
      </Typography>
      <Divider />
      <List>
        <ListItemButton>Laggo</ListItemButton>
        {/* {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              href="http://www.google.com/"
              sx={{ textAlign: "center" }}
              id={item.toLowerCase()}
              onClick={() =>
                router.push({
                  pathname: item == "Home" ? "/" : `/${item.toLowerCase()}`,
                })
              }
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))} */}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" className={styles.navbar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            style={{ width: "100%" }}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <div className={styles.mediaNav}>
              <div
                className={styles.logodiv}
                onClick={() =>
                  router.push({
                    pathname: "/",
                  })
                }
              >
                <Image
                  src="/Logo.jpg"
                  alt="Logo"
                  width={190}
                  height={63}
                ></Image>
              </div>
              <MenuIcon />
            </div>
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <div
              className={styles.logodiv}
              onClick={() =>
                router.push({
                  pathname: "/",
                })
              }
            >
              <Image src="/Logo.jpg" alt="Logo" width={190} height={63}></Image>
            </div>
          </Typography>
          <Box
            sx={{ display: { xs: "none", sm: "block" } }}
            className={styles.navList}
          >
            {navItems.map((item) => (
              <Button
                href={`https://www.ilovecompress.com${
                  item == "Home" ? "/" : `/${item.toLowerCase()}`
                }`}
                key={item}
                sx={{ color: "#192033" }}
                id={item.toLowerCase()}
                onClick={() =>
                  router.push({
                    pathname: item == "Home" ? "/" : `/${item.toLowerCase()}`,
                  })
                }
                className={styles.navBtn}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
