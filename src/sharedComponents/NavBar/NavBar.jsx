// // // import React from 'react';
// // // import { makeStyles } from '@material-ui/core/styles';
// // // import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
// // // import MenuIcon from '@material-ui/icons/Menu';

// // // const useStyles = makeStyles((theme) => ({
// // //     root: {
// // //         flexGrow: 1,
// // //     },
// // //     menuButton: {
// // //         marginRight: theme.spacing(2),
// // //     },
// // //     title: {
// // //         flexGrow: 1,
// // //     },
// // // }));

// // // export default function NavBar() {
// // //     const classes = useStyles();

// // //     return (
// // //         <div className={classes.root}>
// // //             <AppBar position="static">
// // //                 <Toolbar>
// // //                     <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
// // //                         <MenuIcon />
// // //                     </IconButton>
// // //                     <Typography variant="h6" className={classes.title}>
// // //                         News
// // //                     </Typography>
// // //                     <Button color="inherit">Login</Button>
// // //                 </Toolbar>
// // //             </AppBar>
// // //         </div>
// // //     );
// // // }
// // import React, { Component } from 'react';
// // import PropTypes from 'prop-types';
// // import {
// //     AppBar, Toolbar, Typography, List, ListItem,
// //     withStyles, Grid, SwipeableDrawer
// // } from '@material-ui/core';
// // import MenuIcon from '@material-ui/icons/Menu';

// // const styleSheet = {
// //     list: {
// //         width: 200,
// //     },
// //     padding: {
// //         paddingRight: 30,
// //         cursor: "pointer",
// //     },

// //     sideBarIcon: {
// //         padding: 0,
// //         color: "white",
// //         cursor: "pointer",
// //     }
// // }

// // class NavBar extends Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = { drawerActivate: false, drawer: false };
// //         this.createDrawer = this.createDrawer.bind(this);
// //         this.destroyDrawer = this.destroyDrawer.bind(this);
// //     }

// //     componentWillMount() {
// //         if (window.innerWidth <= 600) {
// //             this.setState({ drawerActivate: true });
// //         }

// //         window.addEventListener('resize', () => {
// //             if (window.innerWidth <= 600) {
// //                 this.setState({ drawerActivate: true });
// //             }
// //             else {
// //                 this.setState({ drawerActivate: false })
// //             }
// //         });
// //     }

// //     //Small Screens
// //     createDrawer() {
// //         return (
// //             <div>
// //                 <AppBar >
// //                     <Toolbar>
// //                         <Grid container direction="row" justify="space-between" alignItems="center">
// //                             <MenuIcon
// //                                 className={this.props.classes.sideBarIcon}
// //                                 onClick={() => { this.setState({ drawer: true }) }} />

// //                             <Typography color="inherit" variant="headline">Title</Typography>
// //                             <Typography color="inherit" variant="headline"></Typography>
// //                         </Grid>
// //                     </Toolbar>
// //                 </AppBar>

// //                 <SwipeableDrawer
// //                     open={this.state.drawer}
// //                     onClose={() => { this.setState({ drawer: false }) }}
// //                     onOpen={() => { this.setState({ drawer: true }) }}>

// //                     <div
// //                         tabIndex={0}
// //                         role="button"
// //                         onClick={() => { this.setState({ drawer: false }) }}
// //                         onKeyDown={() => { this.setState({ drawer: false }) }}>

// //                         <List className={this.props.classes.list}>
// //                             <ListItem key={1} button divider> Option 1 </ListItem>
// //                             <ListItem key={2} button divider> Option 2 </ListItem>
// //                             <ListItem key={3} button divider> Option 3 </ListItem>
// //                         </List>

// //                     </div>
// //                 </SwipeableDrawer>

// //             </div>
// //         );
// //     }

// //     //Larger Screens
// //     destroyDrawer() {
// //         const { classes } = this.props
// //         return (
// //             <AppBar>
// //                 <Toolbar>
// //                     <Typography variant="headline" style={{ flexGrow: 1 }} color="inherit" >Title</Typography>
// //                     <Typography variant="subheading" className={classes.padding} color="inherit" >OPTION 1</Typography>
// //                     <Typography variant="subheading" className={classes.padding} color="inherit" >OPTION 2</Typography>
// //                     <Typography variant="subheading" className={classes.padding} color="inherit" >OPTION 3</Typography>
// //                 </Toolbar>
// //             </AppBar>
// //         )
// //     }

// //     render() {
// //         return (
// //             <div>
// //                 {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
// //             </div>
// //         );
// //     }
// // }

// // NavBar.propTypes = {
// //     classes: PropTypes.object.isRequired
// // };



// // export default withStyles(styleSheet)(NavBar);
// // import React from "react";
// // import { Button, Grid, MenuItem, Typography, AppBar, Toolbar } from "@material-ui/core";
// // import { makeStyles } from "@material-ui/core/styles";
// // import ButtonAppBarCollapse from "./ButtonAppBarCollapse";

// // const useStyles = makeStyles((theme) => ({
// //     root: {
// //         flexGrow: 1,
// //         // position: "absolute",
// //         // right: 0,
// //         width: "100%",
// //         marginBottom: "10px"
// //     },
// //     buttonBar: {
// //         [theme.breakpoints.down("xs")]: {
// //             display: "none"
// //         },
// //         // margin: "10px",
// //         // paddingLeft: "16px",
// //         // right: 0,
// //         // position: "relative",
// //         // width: "100%",
// //         // background: "transparent"
// //         // background: "#3700B3"
// //     },
// //     ofMobile: {
// //         [theme.breakpoints.down("xs")]: {
// //             display: "none"
// //         },
// //     },
// //     upMobile: {
// //         [theme.breakpoints.up("xs")]: {
// //             display: "block"
// //         },
// //     }
// // }));

// // export default function NavBar() {
// //     const classes = useStyles();
// //     return (
// //         <div className={classes.root}>
// //             {/* <Grid container justify="center" direction="row" alignItems="center" flexWrap="nowrap">
// //                 <Grid item sm={0} xs={4}>
// //                     <ButtonAppBarCollapse>
// //                         <MenuItem>Login</MenuItem>
// //                         <MenuItem>Signup</MenuItem>
// //                     </ButtonAppBarCollapse>
// //                 </Grid>
// //                 <Grid item sm={4} xs={0} className={classes.ofMobile}></Grid>
// //                 <Grid item sm={4} xs={8}>
// //                     <Typography align="center "> NavBar Heading</Typography>
// //                 </Grid>
// //                 <Grid item sm={4} xs={0} className={classes.buttonBar} id="appbar-collapse">
// //                     {/* <div className={classes.buttonBar} id="appbar-collapse"> 
// //             {/* <Button color="inherit">Login</Button>
// //             <Button color="inherit">Signup</Button> */}
// //             {/* </div> */}
// //             {/* </Grid> */}
// //             {/* </Grid > * /} */}
// //             <AppBar position="static" color="transparent">
// //                 <Toolbar>
// //                     <Grid container justify="center" direction="row" style={{
// //                         flexWrap: "nowrap"
// //                     }} >
// //                         {/* <Grid item sm={4}></Grid> */}
// //                         <Grid item sm={6} container justify="flex-start" alignItems="center">
// //                             <Typography>
// //                                 NavBar Heading
// //                             </Typography>
// //                         </Grid>
// //                         <Grid item container sm={6} justify="flex-end" className={classes.buttonBar} wrap="nowrap" >
// //                             <Grid item><Button color="inherit">Get Listed!</Button> </Grid>
// //                             <Grid item><Button color="inherit">Login</Button> </Grid>
// //                             <Grid item><Button color="inherit">Signup</Button> </Grid>
// //                         </Grid>
// //                         <Grid item sm={0} xs={4} className={classes.upMobile}>
// //                             <ButtonAppBarCollapse>
// //                                 <MenuItem>Get Listed!</MenuItem>
// //                                 <MenuItem>Login</MenuItem>
// //                                 <MenuItem>Signup</MenuItem>
// //                             </ButtonAppBarCollapse>
// //                         </Grid>
// //                     </Grid>
// //                 </Toolbar>
// //             </AppBar>
// //         </div >
// //     );
// // }
// //     // export default withStyles(styles)(NavBar);

// import React, { useState, useEffect } from 'react';
// import { Button } from "@material-ui/core";
// import { Link } from 'react-router-dom';
// import './NaBar.css';
// import { goToRoute } from '../../utilities/router';
// import { SIGNUP_ROUTE } from '../../configurations/routing/routeConstants';

// function Navbar() {
//     const [click, setClick] = useState(false);
//     const [button, setButton] = useState(true);

//     const handleClick = () => setClick(!click);
//     const closeMobileMenu = () => setClick(false);

//     const showButton = () => {
//         if (window.innerWidth <= 960) {
//             setButton(false);
//         } else {
//             setButton(true);
//         }
//     };

//     useEffect(() => {
//         showButton();
//     }, []);

//     window.addEventListener('resize', showButton);
//     const signUp = () => {
//         goToRoute(SIGNUP_ROUTE)
//     }

//     return (
//         <>
//             <nav className='navbar'>
//                 <div className='navbar-container'>
//                     <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
//                         TRVL
//                         <i class='fab fa-typo3' />
//                     </Link>
//                     <div className='menu-icon' onClick={handleClick}>
//                         <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
//                     </div>
//                     <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//                         <li className='nav-item'>
//                             <Link to='/' className='nav-links' onClick={closeMobileMenu}>
//                                 Home
//                             </Link>
//                         </li>
//                         <li className='nav-item'>
//                             <Link
//                                 to='/services'
//                                 className='nav-links'
//                                 onClick={closeMobileMenu}
//                             >
//                                 Services
//                             </Link>
//                         </li>
//                         <li className='nav-item'>
//                             <Link
//                                 to='/products'
//                                 className='nav-links'
//                                 onClick={closeMobileMenu}
//                             >
//                                 Products
//                             </Link>
//                         </li>

//                         <li>
//                             <Link
//                                 to='/sign-up'
//                                 className='nav-links-mobile'
//                                 onClick={closeMobileMenu}
//                             >
//                                 Sign Up
//                             </Link>
//                         </li>
//                     </ul>
//                     {button && <Button onClick={signUp} buttonStyle='btn--outline'>SIGN UP</Button>}
//                 </div>
//             </nav>
//         </>
//     );
// }

// export default Navbar;

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
import { LOG_IN, SIGNUP_ROUTE } from '../../configurations/routing/routeConstants';
import React, { useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";

import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";

import {
    withRouter,
} from "react-router-dom";
import { applicationActions } from "../../actions/application";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        justifyContent: "space-evenly",
    },
    appbar: {
        // backgroundColor: "#e5ffff",
        // color: "#49599a",
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
        cursor: "pointer",
        marginLeft: "4px"

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
        cursor: "pointer"
    },
}));

function Navbar(props) {
    const { history } = props;
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
    const dispatch = useDispatch();
    // const user = useSelector((state) => state.application.user.user.name);

    const loggedIn = useSelector((state) => state.application.loggedIn);
    // console.log(user, "User in user")

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
    const signUp = () => {
        history.push(SIGNUP_ROUTE)
    }
    const logIn = () => {
        history.push(LOG_IN)
    }
    const user = useSelector((state) => state.application.user);
    const [name, setName] = useState("B");
    useEffect(() => {
        if (loggedIn && user) {
            // console.log(user["user"].name, "User in user in if")
            if (user && user["user"]) {
                setName(user["user"].name)
            } else {
                setName("B")
            }
        }
        else {
            console.log(user, "User in user in else")
            setName("B")
        }
    }, [loggedIn, user])

    const menuItems = [
        {
            menuId: "339",
            menuTitle: "Home",
            pageURL: "/",
        },
        // {
        //     menuId: "322",

        //     menuTitle: "ContactUs",
        //     pageURL: "/ContactUs",
        // },
        // {
        //     menuId: "333",
        //     menuTitle: "AboutUs",
        //     pageURL: "/AboutUs",
        // },
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
            <AppBar position="sticky" color="transparent">
                <Toolbar>
                    <Grid container justify="space-between" direction="row" wrap="nowrap">

                        {!isMobile ? (
                            <Grid item container>
                                <Typography variant="h6" onClick={() => history.push("/")} className={classes.navTitle}>
                                    {/* <NavLink
                                        to="/"
                                        exact
                                        activeClassName={classes.activeTitle}
                                        className={classes.navTitle}
                                    > */}

                                    Home
                                    {/* </NavLink> */}
                                </Typography></Grid>) : null}


                        {isMobile ? (
                            <>
                                <Grid container justify="space-between" >
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
                                            {loggedIn ? (
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
                                            <Avatar alt="Name" style={{ backgroundColor: "#FF5722" }} >
                                                {name[0]}
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
                                            {loggedIn ? (
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
                                {/* <Typography variant="h6" className={classes.title}>
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
                            </Typography> */}
                                <Grid item container>
                                    {loggedIn ? (
                                        <Typography
                                            variant="h6"
                                            className={classes.logOut}
                                            onClick={() => dispatch(applicationActions.logout())}
                                        >
                                            LogOut
                                        </Typography>
                                    ) : (
                                        <>
                                            <Grid container item spacing={2} wrap="nowrap">
                                                <Grid item>
                                                    <Typography variant="h6" noWrap className={classes.navTitle}>
                                                        {/* <NavLink
                                                            to="/LogIn"
                                                            activeClassName={classes.activeTitle}
                                                            className={classes.navTitle}
                                                        > */}
                                                        Get Listed!
                                                        {/* </NavLink> */}
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography onClick={logIn} variant="h6" className={classes.navTitle}>
                                                        {/* <NavLink
                                                            to="/LogIn"
                                                            activeClassName={classes.activeTitle}
                                                            className={classes.navTitle}
                                                        > */}
                                                        LogIn
                                                        {/* </NavLink> */}
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography onClick={signUp} variant="h6" className={classes.navTitle}>
                                                        {/* <NavLink
                                                            to="/SignUp"
                                                            activeClassName={classes.activeTitle}
                                                            className={classes.navTitle}
                                                        > */}
                                                        SignUp
                                                        {/* </NavLink> */}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </>
                                    )}</Grid>
                            </div>
                        )}
                    </Grid>

                </Toolbar>
            </AppBar>
        </div >
    );
}

export default withRouter(Navbar);
