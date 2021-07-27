import React, { useState } from "react";
import Link from "next/link";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import { makeStyles } from "@material-ui/core/styles";

import Icon from "../Icon";

const useStyles = makeStyles((theme) => ({
  listItem: {
    borderRadius: 8,
  },
  nested: {
    paddingLeft: theme.spacing(4),
    borderRadius: 8,
  },
}));

/**
 * @param  String title
 * @param  String iconName
 * @param  [] items
 */
export default function NavItemsNested({ title, iconName, items = [] }) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <>
      <ListItem
        button
        onClick={() => setOpen(!open)}
        className={classes.listItem}
      >
        <ListItemIcon>
          <Icon name={iconName} />
        </ListItemIcon>
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div">
          {items.map((menu) => (
            <Link href={menu.link} key={menu.link}>
              <a>
                <ListItem button component="li" className={classes.nested}>
                  <ListItemIcon>
                    <Icon name={menu.iconName} />
                  </ListItemIcon>
                  <ListItemText primary={menu.title} />
                </ListItem>
              </a>
            </Link>
          ))}
        </List>
      </Collapse>
    </>
  );
}
