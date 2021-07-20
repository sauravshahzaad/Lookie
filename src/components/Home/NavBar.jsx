import {
  AppBar,
  Avatar,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import {
  NavLink,
  withRouter,
} from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";

import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { useState } from "react";
import { applicationActions } from "../../actions/application"

// import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: "space-evenly",
  },
  appbar: {
    backgroundColor: "#e5ffff",
    color: "#49599a",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
    },
    color: "#e5ffff",
  },
  navTitle: {
    color: "#541a8b",
    textDecoration: "none",
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly",
  },
  activeTitle: {
    flexGrow: 1,
    color: "#bb4d00",
    fontWeight: "bold",
    textDecoration: "none",
  },
  logOut: {
    // flexGrow: 1,
    // color: "#49599a",
    color: "#541a8b",
  },
}));

function NavBar(props) {
  //   let history = useHistory();
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const dispatch = useDispatch();
  const user = useSelector((state) => state.application.user);
  const isLoggeIn = useSelector((state) => state.application.loggedIn);
  console.log(user, isLoggeIn);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  //   const handleButtonClick = (pageURL) => {
  //     history.push(pageURL);
  //   };

  const menuItems = [
    {
      menuId: "339",
      menuTitle: "Home",
      pageURL: "/",
    },
    {
      menuId: "322",

      menuTitle: "ContactUs",
      pageURL: "/ContactUs",
    },
    {
      menuId: "333",
      menuTitle: "AboutUs",
      pageURL: "/AboutUs",
    },
    // {
    //     menuId:"345",
    //   menuTitle: "LogIn",
    //   pageURL: "/LogIn",
    // },
    // {
    //     menuId:"365",
    //   menuTitle: "SignUp",
    //   pageURL: "/SignUp",
    // },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.appbar}>
        <Toolbar>
          {!isMobile ? (<Typography variant="h6" className={classes.title}>
            <NavLink
              to="/"
              exact
              activeClassName={classes.activeTitle}
              className={classes.navTitle}
            >
              Home
            </NavLink>
          </Typography>) : null}

          {isMobile ? (
            <>
              <Grid container justify="space-between">
                <Grid item>
                  <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                    onClick={handleMenu}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                  >
                    {menuItems.map((menuItem) => {
                      const { menuId, menuTitle, pageURL } = menuItem;
                      return (
                        <MenuItem key={menuId} onClick={() => handleMenuClick(pageURL)}>
                          {menuTitle}
                        </MenuItem>
                      );
                    })}
                    {isLoggeIn ? (
                      <MenuItem
                        // variant="h6"
                        // className={classes.logOut}
                        onClick={() => dispatch(applicationActions.logout())}
                      >
                        LogOut
                      </MenuItem>
                    ) : (<MenuItem onClick={() => handleMenuClick("/LogIn")}>{"Log In "}</MenuItem>)}
                  </Menu>
                </Grid>
                <Grid item>
                  <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                    onClick={handleMenu}
                  >
                    <Avatar alt="Remy Sharp" style={{ backgroundColor: "#FF5722" }} >
                      B
                    </Avatar>
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                  >
                    {menuItems.map((menuItem) => {
                      const { menuId, menuTitle, pageURL } = menuItem;
                      return (
                        <MenuItem key={menuId} onClick={() => handleMenuClick(pageURL)}>
                          {menuTitle}
                        </MenuItem>
                      );
                    })}
                    {isLoggeIn ? (
                      <MenuItem
                        // variant="h6"
                        // className={classes.logOut}
                        onClick={() => dispatch(applicationActions.logout())}
                      >
                        LogOut
                      </MenuItem>
                    ) : (<MenuItem onClick={() => handleMenuClick("/LogIn")}>{"Log In "}</MenuItem>)}
                  </Menu>
                </Grid>
              </Grid>
            </>
          ) : (
            <div className={classes.headerOptions}>
              <Typography variant="h6" className={classes.title}>
                <NavLink
                  to="/ContactUs"
                  activeClassName={classes.activeTitle}
                  className={classes.navTitle}
                >
                  ContactUs
                </NavLink>
              </Typography>
              <Typography variant="h6" className={classes.title}>
                <NavLink
                  to="/AboutUs"
                  activeClassName={classes.activeTitle}
                  className={classes.navTitle}
                >
                  AboutUs
                </NavLink>
              </Typography>
              {isLoggeIn ? (
                <Typography
                  variant="h6"
                  className={classes.logOut}
                  onClick={() => dispatch(applicationActions.logout())}
                >
                  LogOut
                </Typography>
              ) : (
                <>
                  <Typography variant="h6" className={classes.title}>
                    <NavLink
                      to="/LogIn"
                      activeClassName={classes.activeTitle}
                      className={classes.navTitle}
                    >
                      LogIn
                    </NavLink>
                  </Typography>
                  <Typography variant="h6" className={classes.title}>
                    <NavLink
                      to="/SignUp"
                      activeClassName={classes.activeTitle}
                      className={classes.navTitle}
                    >
                      SignUp
                    </NavLink>
                  </Typography>
                </>
              )}
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(NavBar);
