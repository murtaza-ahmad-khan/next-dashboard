import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";

import NavItems from "./common/NavItems/NavItems";
import { drawerWidth } from "../../variables/variables";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    padding: theme.spacing(1),
    paddingTop: 70,
  },
  drawerPaperMob: {
    width: drawerWidth,
    padding: theme.spacing(1),
  },
}));

export default function Sidebar({
  openDrawer,
  openMobDrawer,
  setOpenMobDrawer,
}) {
  const classes = useStyles();

  return (
    <>
      <Hidden smUp implementation="css">
        <Drawer
          className={classes.drawer}
          variant="temporary"
          onClose={() => setOpenMobDrawer(false)}
          open={openMobDrawer}
          classes={{
            paper: classes.drawerPaperMob,
          }}
          anchor="left"
        >
          <NavItems />
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="persistent"
          open={openDrawer}
        >
          <NavItems />
        </Drawer>
      </Hidden>
    </>
  );
}
