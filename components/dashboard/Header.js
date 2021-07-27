import React, { useContext } from "react";
import {
  AppBar,
  Avatar,
  IconButton,
  makeStyles,
  Toolbar,
  Checkbox,
  Hidden,
} from "@material-ui/core";

import Icon from "./common/Icon";
import Menu from "./common/Menu";
import Logo from "./common/Logo";
import { Theme } from "../../contexts/DashboardTheme";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    zIndex: 1300,
  },
  toolbar: {
    justifyContent: "space-between",
  },
  toolbarStart: {
    display: "flex",
    justifyContent: "space-between",
    width: 228,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(2),
    alignItems: "center",
  },
  toolbarEnd: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    marginRight: 5,
    marginLeft: 5,
  },
}));

export default function Header({
  openDrawer,
  setOpenDrawer,
  openMobDrawer,
  setOpenMobDrawer,
}) {
  const classes = useStyles();
  const { darkMode, setDarkMode } = useContext(Theme);

  return (
    <AppBar position="fixed" className={classes.appBar} elevation={0}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.toolbarStart}>
          <Logo />
          <Hidden xsDown implementation="css">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setOpenDrawer(!openDrawer)}
            >
              <Icon name="Menu" />
            </IconButton>
          </Hidden>

          <Hidden smUp implementation="css">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setOpenMobDrawer(!openMobDrawer)}
            >
              <Icon name="Menu" />
            </IconButton>
          </Hidden>
        </div>
        <div className={classes.toolbarEnd}>
          <Checkbox
            icon={<Icon name="Brightness7" />}
            checkedIcon={<Icon name="Brightness4" />}
            onChange={() => setDarkMode(!darkMode)}
            className={classes.icon}
          />

          <Icon name="Notifications" className={classes.icon} />
          <Menu
            MenuButton={<Avatar />}
            items={[{ title: "Profile" }, { title: "Logout" }]}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}
