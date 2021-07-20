import {
  Box,
  Button,
  Grid,
  Paper,
  Snackbar,
  SvgIcon,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

import MapIcon from "@material-ui/icons/Map";
import MessageIcon from "@material-ui/icons/Message";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    position: "sticky",
    // top: 20,
    bottom: 20,
    zIndex: 5,
    color: "#387002",
  },
  wrapIcon: {
    verticalAlign: "middle",
    display: "inline-flex",
  },
  iconDiv: {
    display: "contents",
  },
});

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Home(props) {
  // const isLoggedIn = useSelector((state) => state.application.loggedIn);
  // const user = useSelector((state) => state.application.user);
  const alert = useSelector((state) => state.application.noti);
  const [messge, setmsg] = useState("");
  const vertical = "top";
  const horizontal = "center";
  const history = useHistory();
  const classes = useStyles(props);
  useEffect(() => {
    if (alert.type === "no_alert") {
      setOpen(false);
    } else if (alert.type === "success") {
      setOpen(true);
      setmsg(alert.message);
      console.log(alert.message + " => " + messge);
    } else if (alert.type === "error") {
      setOpen(true);
      setmsg(alert.message);
      console.log(alert.message + " => " + messge);
    } else {
      setOpen(false);
    }
  }, [alert, messge]);

  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <Box height="100vh">
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
        >
          <Grid
            item
            container
            justify="center"
            alignItems="center"
          // spacing={5}
          >
            <Grid item container>
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <Box mt={2}>
                  <Paper
                    onClick={() => {
                      history.push("/CreateJourney");
                    }}
                  >
                    <Box p={4} bgcolor="#c5cae9">
                      <Typography align="center" variant="subtitle2">
                        CREATE JOURNEY
                      </Typography>
                    </Box>
                  </Paper>
                </Box>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
            <Grid item container>
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <Box mt={2}>
                  <Paper
                    onClick={() => {
                      history.push("/PendingJourney");
                    }}
                  >
                    <Box p={3} py={4} bgcolor="#c5cae9">
                      <Typography align="center" variant="subtitle2">
                        REQUESTS PENDING
                      </Typography>
                    </Box>
                  </Paper>
                </Box>
              </Grid>
              <Grid item={2}></Grid>
            </Grid>
          </Grid>
          <Grid item container justify="center">
            <Grid item container justify="center">
              <Grid item xs={2}></Grid>
              <Grid item xs={4} container justify="center">
                <Box mt={15} display="flex" justify="center">
                  <Paper onClick={() => {
                    history.push("/Support");
                  }}><SvgIcon
                    style={{ fontSize: 80, color: "#4CAF50" }}

                  >
                      <MessageIcon />
                      {/* </IconButton> */}
                    </SvgIcon></Paper>
                </Box>
              </Grid>
              <Grid
                item
                xs={4}
                container
                justify="center"
                display="inline-flex"
                className={classes.iconDiv}
              >
                <Box mt={15} alignItems="center" className={classes.wrapIcon}>
                  <Paper onClick={() => {
                    history.push("/Maps");
                  }}><SvgIcon
                    style={{ fontSize: 80, color: "#4CAF50" }}

                  >
                      <MapIcon />
                      {/* </IconButton> */}
                    </SvgIcon></Paper>
                </Box>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
            <Grid item>
              <Box mt={8} mb={5}>
                <Button
                  // color="#387002"
                  variant="contained"
                  className={classes.root}
                  onClick={() => {
                    history.push("/UpComingJourney");
                  }}
                >
                  UPCOMING JOURNEY
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={alert.type}>
          {messge}
        </Alert>
      </Snackbar>
    </>
  );
}

export default Home;
