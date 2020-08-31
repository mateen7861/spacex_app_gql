import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",

      backgroundColor: "#1f1f1f",
    },
  })
);

export default function ListDividers() {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="CEO : Elon Musk" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Founder : Elon Musk" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Founded : May 6, 2002" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Revenue : 2 billion USD (2019)" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Headquarters : Hawthorne, California, United States" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Number of employees : 8,000 (May 2020)" />
      </ListItem>
    </List>
  );
}
