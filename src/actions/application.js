import {
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

import { alertActions } from "./alert"
// import { history } from "../configurations/routing/history";
import { userService } from "../services/userService";

// import { useHistory } from "react-router-dom";

// function login(email, password, from) {
//   return (dispatch) => {
//     dispatch(request({ email }));

//     userService.login(email, password).then(
//       (user) => {
//         if (!user) {
//           const msg = "email or Password Does not Match";
//           const data = dispatch(failure(msg));
//           dispatch(alertActions.error(msg));
//           console.log(data, "Data in user")
//           return data
//         } else {
//           console.log(user);
//           console.log(
//             "Authenticated from user.js user => " + JSON.stringify(user)
//           );
//           dispatch(success(user));
//           dispatch(alertActions.success("Logged in Successfully"));
//           console.log(`history.push("/");`);
//           console.log(from)
//           history.push(from.pathname);

//           // history.replace("/");
//         }
//       },
//       (error) => {
//         dispatch(failure(error.toString()));
//         dispatch(alertActions.error(error.toString()));
//         // history.push(from)
//       }
//     );
//   };

//   function request(user) {
//     return { type: LOGIN_REQUEST, user };
//   }
//   function success(user) {
//     return { type: LOGIN_SUCCESS, user };
//   }
//   function failure(error) {
//     return { type: LOGIN_FAILURE, error };
//   }
// }
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
                dispatch(alertActions.success(response.data.msg));
                // console.log(response.data.msg, "in User")
                return response
            } else {
                dispatch(signUpCreator(REGISTER_FAILURE, response.data.msg))
                dispatch(alertActions.error(response.data.msg.toString()));
                return response
            }
        } catch (err) {
            console.log(err)
            dispatch(signUpCreator(REGISTER_FAILURE, err))
            dispatch(alertActions.error(err.toString()));
        }
    }
}

function logout() {
    return (dispatch) => {
        dispatch(alertActions.clear())
        userService.logout().then((res) => {
            console.log(`Logged out result => ` + res)
            if (res === "logout") {
                dispatch(logOutUser())
                dispatch(alertActions.success("Loggout Successfully.."))
            } else {
                dispatch(alertActions.error("Loggout Failed.."))
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
const serviceSelect = (services) => {
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

// function register(user) {
//   return (dispatch) => {
//     dispatch(request(user));

//     userService.register(user).then(
//       (res) => {
//         console.log("on user.js " + res)
//         if (res === "Registered") {
//           dispatch(success());
//           // history.push("/login");
//           dispatch(alertActions.success("Registration successful"));
//           dispatch(login(user.username, user.password))
//         } else if (res === "Already Registered") (
//           dispatch(alertActions.error("Already Registered"))
//         )
//         else {
//           dispatch(failure("Registration Failed"));
//           dispatch(alertActions.error("UserName Already taken"));
//         }
//         // dispatch(success());
//         // history.push("/login");
//         // dispatch(alertActions.success("Registration successful"));
//       },
//       (error) => {
//         dispatch(failure(error.toString()));
//         dispatch(alertActions.error(error.toString()));
//       }
//     );
//   };

//   function request(user) {
//     return { type: REGISTER_REQUEST, user };
//   }
//   function success(user) {
//     return { type: REGISTER_SUCCESS, user };
//   }
//   function failure(error) {
//     return { type: REGISTER_FAILURE, error };
//   }
// }

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
    serviceSelect,
    shopSelect
};
