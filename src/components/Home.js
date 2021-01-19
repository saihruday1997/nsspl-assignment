import React, { useState, useEffect } from "react";
import "./Home.css";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import User from "./User";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    maxHeight: "100vh",
    overflow: "auto",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Home() {
  const [data, setData] = useState([]);
  const [currUser, setCurrUser] = useState({});
  const classes = useStyles();

  useEffect(() => {
    let url = "https://api.github.com/users";
    fetch(url).then((res) => {
      res.json().then((result) => {
        setData(result);
      });
    });
  }, []);

  return (
    <div className="root">
      <Box display={"flex"}>
        <div className={classes.root}>
          <List component="nav" aria-label="main mailbox folders">
            <div className="user-list">
              {data.map((user) => (
                <ListItem
                  button
                  onClick={() => {
                    setCurrUser(user);
                  }}
                  key={user.id}
                >
                  <ListItemIcon>
                    <AccountBoxIcon />
                  </ListItemIcon>
                  <ListItemText primary={user.login} />
                </ListItem>
              ))}
            </div>
          </List>
        </div>
        <div className="user-details">
          {currUser.id && <User user={currUser} />}
        </div>
      </Box>
    </div>
  );
}
