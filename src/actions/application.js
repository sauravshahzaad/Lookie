import {
    BOOK_APPOINTMENT_FAILURE,
    BOOK_APPOINTMENT_REQUEST,
    BOOK_APPOINTMENT_SUCCESS,
    CLEAR,
    DELETE_FAILURE,
    DELETE_REQUEST,
    DELETE_SUCCESS,
    ERROR,
    GETALL_FAILURE,
    GETALL_REQUEST,
    GETALL_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    SET_LOCATION_FAILURE,
    SET_LOCATION_REQUEST,
    SET_LOCATION_SUCCESS,
    SET_SERVICES_FAILURE,
    SET_SERVICES_REQUEST,
    SET_SERVICES_SUCCESS,
    SET_SHOP_FAILURE,
    SET_SHOP_REQUEST,
    SET_SHOP_SUCCESS,
    SUCCESS,
} from "../actionConstants/actionConstants"
import { applicationService } from "../services/applicationService";

import { userService } from "../services/userService";

const logInCreator = (type, payload = undefined) => ({
    type,
    payload
})
const login = (email, password, from) => {
    return async (dispatch) => {
        dispatch(logInCreator(LOGIN_REQUEST))
        try {
            const response = await userService.login(email, password)
            dispatch(logInCreator(LOGIN_SUCCESS, response))
            // console.log(response)
            return response
        } catch (err) {
            console.log(err)
            dispatch(logInCreator(LOGIN_FAILURE, err))
        }
    }
}

const signUpCreator = (type, payload = undefined) => ({
    type,
    payload
})
const register = (user) => {
    return async (dispatch) => {
        dispatch(signUpCreator(REGISTER_REQUEST))
        try {
            const response = await userService.register(user)
            if (response.data.success) {
                dispatch(signUpCreator(REGISTER_SUCCESS, response))
                dispatch(success(response.data.msg));
                // console.log(response.data.msg, "in User")
                return response
            } else {
                dispatch(signUpCreator(REGISTER_FAILURE, response.data.msg))
                dispatch(error(response.data.msg.toString()));
                return response
            }
        } catch (err) {
            console.log(err)
            dispatch(signUpCreator(REGISTER_FAILURE, err))
            dispatch(error(err.toString()));
        }
    }
}

function logout() {
    return (dispatch) => {
        dispatch(clear())
        userService.logout().then((res) => {
            console.log(`Logged out result => ` + res)
            if (res === "logout") {
                dispatch(logOutUser())
                dispatch(success("Loggout Successfully.."))
            } else {
                dispatch(error("Loggout Failed.."))
            }

        })
    }
    function logOutUser() {
        return { type: LOGOUT };
    }


}

const locationCreator = (type, payload = undefined) => ({
    type,
    payload
})
const location = (location) => {
    console.log("Location,", location)
    return (dispatch) => {
        dispatch(locationCreator(SET_LOCATION_REQUEST))
        try {
            dispatch(locationCreator(SET_LOCATION_SUCCESS, location))
            return location
        } catch (err) {
            console.log(err)
            dispatch(locationCreator(SET_LOCATION_FAILURE, err))
        }
    }
}
const shopSelectCreator = (type, payload = undefined) => ({
    type,
    payload
})
const shopSelect = (shop) => {
    console.log("shop,", shop)
    return (dispatch) => {
        dispatch(shopSelectCreator(SET_SHOP_REQUEST))
        try {
            dispatch(shopSelectCreator(SET_SHOP_SUCCESS, shop))
            return shop
        } catch (err) {
            console.log(err)
            dispatch(shopSelectCreator(SET_SHOP_FAILURE, err))
        }
    }
}
const serviceSelectCreator = (type, payload = undefined) => ({
    type,
    payload
})
const servicesSelect = (services) => {
    console.log("services,", services)
    return (dispatch) => {
        dispatch(serviceSelectCreator(SET_SERVICES_REQUEST))
        try {
            dispatch(serviceSelectCreator(SET_SERVICES_SUCCESS, services))
            return services
        } catch (err) {
            console.log(err)
            dispatch(serviceSelectCreator(SET_SERVICES_FAILURE, err))
        }
    }
}

const bookAppointmentCreator = (type, payload = undefined) => ({
    type,
    payload
})
const bookAppointment = (appointment) => {
    return async (dispatch) => {
        dispatch(bookAppointmentCreator(BOOK_APPOINTMENT_REQUEST))
        try {
            const response = await applicationService.bookAppointment(appointment)
            console.log(response, "in Book Appointment")
            if (response.data.success) {
                dispatch(bookAppointmentCreator(BOOK_APPOINTMENT_SUCCESS, response.data.appointment))
                dispatch(success(response.data.msg));
                console.log(response, "in Book Appointment")
                return response
            } else {
                dispatch(bookAppointmentCreator(BOOK_APPOINTMENT_FAILURE, response.data.msg))
                dispatch(error(response.data.msg.toString()));
                return response
            }
        } catch (err) {
            console.log(err)
            dispatch(error(err.toString()));
        }
    }
}



function getAll() {
    return (dispatch) => {
        dispatch(request());    
        userService.getAll().then(
            (users) => dispatch(success(users)),
            (error) => dispatch(failure(error.toString()))
        );
    };

    function request() {
        return { type: GETALL_REQUEST };
    }
    function success(users) {
        return { type: GETALL_SUCCESS, users };
    }
    function failure(error) {
        return { type: GETALL_FAILURE, error };
    }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return (dispatch) => {
        dispatch(request(id));

        userService.delete(id).then(
            (user) => dispatch(success(id)),
            (error) => dispatch(failure(id, error.toString()))
        );
    };

    function request(id) {
        return { type: DELETE_REQUEST, id };
    }
    function success(id) {
        return { type: DELETE_SUCCESS, id };
    }
    function failure(id, error) {
        return { type: DELETE_FAILURE, id, error };
    }
}
export function success(message) {
    return { type: SUCCESS, message };
}

export function error(message) {
    return { type: ERROR, message };
}

export function clear() {
    return { type: CLEAR };
}
export const applicationActions = {
    success,
    error,
    clear,
    login,
    logout,
    register,
    location,
    getAll,
    delete: _delete,
    servicesSelect,
    shopSelect,
    bookAppointment
};
