import React from "react";
import Link from "next/link";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Icon from "../Icon";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  listItem: {
    borderRadius: 8,
  },
});

/**
 * @param  string title
 * @param  string iconName(Matrial Icon e.g Home, Email)
 * @param  string path
 */
export default function NavItem({ title, iconName, link }) {
  const classes = useStyles();
  return (
    <Link href={link}>
      <a>
        <ListItem button component="li" className={classes.listItem}>
          <ListItemIcon>
            <Icon name={iconName} />
          </ListItemIcon>
          <ListItemText primary={title} />
        </ListItem>
      </a>
    </Link>
  );
}
