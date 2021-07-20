import * as Yup from "yup";
import { Box, Button, Grid, TextField, Select, InputLabel, FormControl } from '@material-ui/core'
import {
    KeyboardDatePicker,
    // KeyboardTimePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { LOG_IN, SUCCESS_PAGE } from '../../../configurations/routing/routeConstants';
import MaterialTypography from "../../../sharedComponents/materialComponents/typography/MaterialTypography"
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from "formik";
import { useHistory } from 'react-router';
import { applicationActions } from "../../../actions/application";

const phoneRegExp = /^[6789]\d{9}$/

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 225,
    },
    date: {
        margin: theme.spacing(1),
        // minWidth: 120,

        padding: "10px"
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export const AppointmentTab = (props) => {
    const classes = useStyles()
    const history = useHistory()
    const { loggedIn, user, services, shop, actions } = props
    // console.log(services, "services", shop, "shop")
    console.log(user.user, "user in appoint")

    const handleBookAppointment = async (appointment) => {
        const res = await actions.bookAppointment(appointment)
        console.log(res, "res")
        if (res.data.success) {
            history.push({pathname:SUCCESS_PAGE})
        }
    }

    // const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        // setSelectedDate(date);
        formik.setFieldValue(`date`, date)
        console.log(date)
    };
    // const handleTimeChange = (time) => {
    //     formik.setFieldValue(`startTime`, time)
    //     console.log(time)
    // }

    const formik = useFormik({
        initialValues: {
            Name: user.user.name,
            mobile: '',
            date: new Date(),
            startTime: shop.About.OpeningHours[0].open,
            services: services === undefined ? "None" : services[0].name
        },
        validationSchema: Yup.object({
            Name: Yup.string()
                .max(25, "Must be 25 characters or less")
                .required("Required"),
            mobile: Yup.string()
                // .required("required")
                .matches(phoneRegExp, 'Phone number is not valid')
                .min(10, "must be 10 digits")
                .max(10, "must be 10 digits"),
            date: Yup.date()
                .required('Date is required')
                .min(new Date(), "Date must be in Future"),
            // .max(new Date() + 10, "Date must be less than this date"),
            startTime: Yup.string()
                .required('Stat Time is required'),
            services: Yup.string()
                .required("Required services")
                // .min(1, "Min length services required")
                .nullable()
        }),
        onSubmit: (values) => {
            const newAppointment = {
                ...values,
                id: user.user.id,
                shopId: shop.id
            }
            console.log(newAppointment)
            handleBookAppointment(newAppointment)

        },
    });

    if (!loggedIn) {
        return (
            <Box>
                <Grid container justify="center" alignItems="center" direction="column">
                    <Grid item>
                        <Button variant="contained" onClick={() => {
                            history.push({
                                pathname: LOG_IN,
                                state: {
                                    from: "/shop"
                                }
                            })
                        }}>Log In</Button>
                    </Grid>
                </Grid>
            </Box>
        )
    }
    return (
        <Box>
            <Grid container justify="center" alignItems="center" direction="column" >
                <Grid item xs={12}>
                    <MaterialTypography variant="h5">
                        Book Your Appointment
                    </MaterialTypography>
                </Grid>
                <Grid item xs={12}>
                    <form className={classes.form} onSubmit={formik.handleSubmit}>
                        <Grid item container direction="column" justify="center" alignItems="center" >
                            <Grid item xs={12}>
                                <FormControl className={classes.formControl}>
                                    <TextField
                                        defaultValue={formik.values.Name}
                                        helperText="Enter User Name"
                                        variant="outlined"
                                        autoComplete="Name"
                                        name="Name"
                                        required
                                        fullWidth
                                        id="Name"
                                        label="Name"
                                        autoFocus
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.Name}
                                    />
                                </FormControl>
                            </Grid>
                            {formik.touched.Name && formik.errors.Name ? (
                                <Grid item xs={12} style={{ color: "red" }}>{formik.errors.Name}</Grid>
                            ) : null}
                            <Grid item xs={12}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="handle">Services</InputLabel>
                                    <Select
                                        labelId="Services"
                                        variant="outlined"
                                        name="services"
                                        id="Services"
                                        defaultValue={services === undefined ? "None" : services[0].name}
                                        select
                                        required
                                        fullWidth
                                        label="Services"
                                        autoFocus
                                        onChange={(e) => {
                                            // console.log(e.target.value)
                                            formik.setFieldValue(`services`, e.target.value)
                                            // console.log(formik.values)
                                        }}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.services}
                                    >
                                        {shop.Services.map(element => (
                                            <MenuItem
                                                value={element.name}
                                                key={element.name}
                                            >
                                                {element.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            {formik.touched.services && formik.errors.services ? (
                                <Grid item xs={12} style={{ color: "red" }}>{formik.errors.services}</Grid>
                            ) : null}
                            <Grid item xs={12}>
                                <FormControl className={classes.date}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <Grid container justifyContent="space-around">
                                            <KeyboardDatePicker
                                                // disableToolbar
                                                variant="dialog"
                                                autoOk="true"
                                                format="dd/MM/yyyy"
                                                // margin="normal"
                                                name="date"
                                                id="date"
                                                label="Date"
                                                value={formik.values.date}
                                                onChange={handleDateChange}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                                required
                                                fullWidth
                                                autoFocus
                                                onBlur={formik.handleBlur}
                                            />
                                        </Grid>
                                    </MuiPickersUtilsProvider>
                                </FormControl>
                            </Grid>
                            {formik.touched.date && formik.errors.date ? (
                                <Grid item xs={12} style={{ color: "red" }}>{formik.errors.date}</Grid>
                            ) : null}
                            <Grid item xs={12}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-error-label">Start Time</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-error-label"
                                        name="startTime"
                                        variant="outlined"
                                        id="demo-simple-select-error"
                                        defaultValue={shop.About.OpeningHours[0]}
                                        select
                                        required
                                        fullWidth
                                        label="startTime"
                                        autoFocus
                                        onChange={(e) => {
                                            // console.log(e.target.value)
                                            formik.setFieldValue(`startTime`, e.target.value)
                                            // console.log(formik.values)
                                        }}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.startTime}
                                    >
                                        {shop.About.OpeningHours.map(e => (
                                            <MenuItem
                                                value={e.open}
                                                key={e.day}
                                            >
                                                {e.open}-{e.close}
                                            </MenuItem>
                                        ))}

                                    </Select>
                                </FormControl>
                            </Grid>
                            {formik.touched.startTime && formik.errors.startTime ? (
                                <Grid item xs={12} style={{ color: "red" }}>{formik.errors.startTime}</Grid>
                            ) : null}
                            <Grid item xs={12} >
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={() => {
                                        console.log(formik.values)
                                    }}
                                >
                                    Book Appointment
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Box>
    )
}

const mapStateToProps = (state) => ({
    loggedIn: state.application.loggedIn,
    user: state.application.user,
    services: state.application.services,
    shop: state.application.shop

})

const mapDispatchToProps = (dispatch) => ({
    actions: {
        bookAppointment: (appointment) => {
            return dispatch(applicationActions.bookAppointment(appointment))
        }
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentTab)
