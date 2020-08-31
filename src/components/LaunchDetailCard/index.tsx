import React, { FC } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import moment from "moment";
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
  flightNumber: number | null | undefined;
  ldate: string | null | undefined;
  launchsite: string | null | undefined;
  details: string | null | undefined;
  launchSuccess: boolean | null | undefined;
}
const ListDividers: FC<Props> = ({
  flightNumber,
  ldate,
  launchsite,
  details,
  launchSuccess,
}) => {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem button>
        <ListItemText>Flight Number : {flightNumber}</ListItemText>
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText>
          Launch Date : {moment(ldate).format("MMMM Do, YYYY")}
        </ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>Launch Site : {launchsite}</ListItemText>
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText>
          Launch Success :{" "}
          <p
            style={{
              color: launchSuccess ? "green" : "red",
              display: "inline",
            }}
          >
            {launchSuccess ? "Yes" : "No"}
          </p>
        </ListItemText>
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText>Launch Details : {details}</ListItemText>
      </ListItem>
    </List>
  );
};
export default ListDividers;
