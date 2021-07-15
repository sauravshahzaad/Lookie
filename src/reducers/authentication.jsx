import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, SET_LOCATION_FAILURE, SET_LOCATION_REQUEST, SET_LOCATION_SUCCESS } from "../actionConstants/actionConstants"

// import { userConstants } from '../_constants';

// let user = JSON.parse(localStorage.getItem('user'));
// const initialState = user ? { loggedIn: true, user } : {};
const initialState = {
    user: {
        user: {
            name: ""
        }
    },
    loggedIn: false,
    location: {
        latitude: 0,
        longitude: 0
    }
};


export function authentication(state = initialState, action) {

    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                loggedIn: true,
                user: action.user
            };
        case LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: { ...action.payload }
            };
        case LOGIN_FAILURE:
            return {
                user: {
                    user: {
                        name: ""
                    }
                },
                loggedIn: false,

            };
        case LOGOUT:
            return {
                user: {
                    user: {
                        name: ""
                    }
                },
                loggedIn: false,

            };
        case SET_LOCATION_REQUEST:
            return {
                location: {
                    latitude: 0,
                    longitude: 0
                }
            };
        case SET_LOCATION_SUCCESS:
            return {
                location: { ...action.payload }
            };
        case SET_LOCATION_FAILURE:
            return {
                location: {
                    latitude: 0,
                    longitude: 0
                }
            };

        default:
            return state
    }
}