import * as Yup from "yup";
import { connect } from 'react-redux'
import Loading from "../../sharedComponents/Loading/Loading"
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  OutlinedInput,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core";
import {
  NavLink,
  useHistory,
} from "react-router-dom";
// import { setUser } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";

import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Link from "@material-ui/core/Link";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import MuiAlert from "@material-ui/lab/Alert";
import React from "react";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { applicationActions } from "../../actions/application";
// import history from "../../configurations/routing/history"
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
// import { useEffect } from 'react';
import { useFormik } from "formik";
import {
  useLocation
} from "react-router-dom";
import { useState } from "react";


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "75%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function LogIn(props) {
  const { loading } = props
  if (loading) {
    <Loading />
  }
  // console.log(props)
  const classes = useStyles();
  const dispatch = useDispatch();
  let history = useHistory();
  const location = useLocation();
  const isLoggedIn = useSelector((state) => state.application.loggingIn);
  const alert = useSelector((state) => state.application.noti);
  const [messge, setmsg] = useState("");
  const [showpass, setShowPass] = useState(false);
  const handleClickShowPassword = () => {
    setShowPass(!showpass);
    // setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    console.log(location, "Location in UseEffect")
  })

  useEffect(() => {
    if (alert.type === 'no_alert') {
      setOpen(false);
    }
    else if (alert.type === 'success') {
      setOpen(true);
      setmsg(alert.message)
      console.log(alert.message + " => " + messge)
    } else if (alert.type === 'error') {
      setOpen(true);
      setmsg(alert.message)
      console.log(alert.message + " => " + messge)
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
  useEffect(() => {
    dispatch(applicationActions.clear())
  }, [dispatch]);

  const handlSubmit = async (email, pass, from) => {
    console.log(from, "from")
    const data = dispatch(applicationActions.login(email, pass, from));
    console.log(isLoggedIn, "isLoggedIn")
    data.then(res => {
      console.log(res, "data in handle")
      if (res) {
        if (res.success) {
          history.push(from)
        }
      }
    })


  }
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Enter a valid email")
        .required("Email is a required field"),
      password: Yup.string()
        .required("No password provided.")
        .min(6, "Password is too short - should be 6 chars minimum."),
      // .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    }),
    onSubmit: (values) => {
      //   alert(JSON.stringify(values, null, 2));
      console.log(JSON.stringify(values));
      // dispatch(setUser(values))
      console.log(location, "location state")
      console.log(history, "history state")
      const { from } = location.state || { from: { pathname: "/" } };
      // const data = dispatch(applicationActions.login(values.email, values.password, from));
      // history.push("/");
      handlSubmit(values.email, values.password, from)

    },
  });
  // if (isLoggedIn) {
  //   return <Redirect to="/" />;
  // }
  return (
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={alert.type}>
            {messge}
          </Alert>
        </Snackbar>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
          {/* <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          /> */}
          <FormControl
            // className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            margin="normal"
            fullWidth
          >
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="password"
              type={showpass ? "text" : "password"}
              required
              fullWidth
              name="password"
              label="Password"
              autoComplete="current-password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showpass ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <NavLink to="/SignUp">
                {/* <Link href="#" variant="body2"> */}
                {"Don't have an account? Sign Up"}
                {/* </Link> */}
              </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const mapStateToProps = (state) => ({
  loading: state.application.loading,

})

const mapDispatchToProps = (dispatch) => ({
  actions: {
    shopSelect: (shop) => {
      return dispatch(applicationActions.shopSelect(shop))
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)

