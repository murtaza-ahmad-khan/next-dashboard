import React, { useEffect, useState } from "react";
import { Container, makeStyles } from "@material-ui/core";
import clsx from "clsx";

import { Header, Sidebar } from "../components/dashboard";
import { drawerWidth } from "../variables/variables";

const useStyles = makeStyles((theme) => ({
  root: { display: "flex" },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
}));

export default function Dashboard({ children }) {
  const [openDrawer, setOpenDrawer] = useState(true);
  const [openMobDrawer, setOpenMobDrawer] = useState(false);

  const drawerState = {
    openDrawer,
    setOpenDrawer,
    openMobDrawer,
    setOpenMobDrawer,
  };

  const classes = useStyles();

  return (
    <>
      <Header {...drawerState} />
      <Sidebar {...drawerState} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: openDrawer,
        })}
      >
        <div className={classes.toolbar} />
        <Container maxWidth="xl">{children}</Container>
      </main>
    </>
  );
}
