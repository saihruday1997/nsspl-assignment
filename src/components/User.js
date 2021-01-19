import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function User(props) {
  const currUser = props.user;
  const classes = useStyles();

  return (
    <div className="user">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="auto"
            image={currUser.avatar_url}
            title="Contemplative Reptile"
          />
        </CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <Box display="flex" flexDirection="column">
              <Link href={currUser.url}>Github url</Link>
              <Link href={currUser.followers_url}>Followers url</Link>
              <Link href={currUser.repos_url}>Repositories url</Link>
              <Link href={currUser.recieved_events_url}>
                Received events url
              </Link>
            </Box>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
