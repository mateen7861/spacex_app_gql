import React, { FC } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: "80vw",
      marginLeft: "10vw",
      [theme.breakpoints.down("sm")]: {
        maxWidth: "90vw",
        marginLeft: "5vw",
      },
      marginTop: "1rem",
      backgroundColor: "#1f1f1f",
    },
  })
);
interface Props {
  rocketId: string | null | undefined;
  rocketName: string | null | undefined;
  rocketType: string | null | undefined;
}
const ListDividers: FC<Props> = ({ rocketId, rocketName, rocketType }) => {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem button>
        <ListItemText>Flight Number : {rocketId}</ListItemText>
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText>Rocket Name : {rocketName}</ListItemText>
      </ListItem>

      <Divider light />
      <ListItem button>
        <ListItemText>Rocket Type: {rocketType}</ListItemText>
      </ListItem>
    </List>
  );
};
export default ListDividers;
