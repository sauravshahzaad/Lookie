// import AboutUs from "./components/Home/AboutUs" //"./AboutUs/AboutUs";
import ApplicationRouter from "./configurations/routing/ApplicationRouter";
// import ContactUs from "./components/Home/ContactUs"
// import Home from "./components/Home/Home"
// import LogIn from "./components/Auth/LogIn"
import NavBar from "./sharedComponents/NavBar/NavBar"
// import ProductLandingContainer from "./components/Product/ProductLanding/ProductLanding.container"
import React from "react";
import {
  Switch
} from "react-router-dom";
// import SignUp from "./components/Auth/SignUp";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column"
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <NavBar />
        <Switch>
          {/* <Route exact path="/" render={(props) => <ProductLandingContainer {...props} />} />
          <Route
            exact
            path="/ContactUs"
            render={(props) => <ContactUs {...props} />}
          />
          <Route
            exact
            path="/AboutUs"
            render={(props) => <AboutUs {...props} />}
          />
          <Route exact path="/LogIn" render={(props) => <LogIn {...props} />} />
          <Route
            exact
            path="/SignUp"
            render={(props) => <SignUp {...props} />}
          /> */}
          <ApplicationRouter />

          {/* <Redirect path="/" /> */}
        </Switch>
      </div>
    </div>
  );
}
