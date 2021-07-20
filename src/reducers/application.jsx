import {
    SET_SERVICES_FAILURE,
    SET_SERVICES_REQUEST,
    SET_SERVICES_SUCCESS,
    SET_SHOP_FAILURE,
    SET_SHOP_REQUEST,
    SET_SHOP_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT,
    SET_LOCATION_FAILURE,
    SET_LOCATION_REQUEST,
    SET_LOCATION_SUCCESS,
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS, SUCCESS, ERROR, CLEAR, BOOK_APPOINTMENT_REQUEST, BOOK_APPOINTMENT_SUCCESS, BOOK_APPOINTMENT_FAILURE
} from "../actionConstants/actionConstants";

const initialState = {
    shop: {

        id: "1",
        name: "Blooms Beauty Salon",
        img: "https://www.bewtifly.com/local/assets/site/images/salon/153891537873078.jpeg",
        gender: "male",
        address: {
            name: "Oud Metha,Dubai",
            location: {
                latitude: "",
                longitude: "",
            }

        },
        rating: "3",
        open: "true",
        About: {
            OpeningHours: [
                {
                    day: "Monday",
                    open: "10:00 am",
                    close: "9:30 pm",
                    break: {
                        open: "1:00 pm",
                        close: "1:30 pm",
                    }
                },
                {
                    day: "Tuesday",
                    open: "10:00 am",
                    close: "9:30 pm",
                    break: {
                        open: "1:00 pm",
                        close: "1:30 pm",
                    }
                },
                {
                    day: "Wednesday",
                    open: "10:00 am",
                    close: "9:30 pm",
                    break: {
                        open: "1:00 pm",
                        close: "1:30 pm",
                    }
                },
                {
                    day: "Thursday",
                    open: "10:00 am",
                    close: "9:30 pm",
                    break: {
                        open: "1:00 pm",
                        close: "1:30 pm",
                    }
                },
                {
                    day: "Friday",
                    open: "10:00 am",
                    close: "9:30 pm",
                    break: {
                        open: "1:00 pm",
                        close: "1:30 pm",
                    }
                },
                {
                    day: "Saturday",
                    open: "10:00 am",
                    close: "9:30 pm",
                    break: {
                        open: "1:00 pm",
                        close: "1:30 pm",
                    }
                },
                {
                    day: "Sunday",
                    open: "10:00 am",
                    close: "9:30 pm",
                    break: {
                        open: "1:00 pm",
                        close: "1:30 pm",
                    }
                },
            ]
        },
        Services: [
            {
                name: "Nail Cutting"
            },
            {
                name: "Saloon"
            },
            {
                name: "Spa"
            }
        ],
        reviews: [
            {
                id: 1,
                reviewer: "Saurav",
                time: "",
                review: "Good",
                rating: 3.5
            },
            {
                id: 1,
                reviewer: "Saurav",
                time: "",
                review: "Good",
                rating: 3.5
            },
        ]
    },
    user: {
        user: {
            name: ""
        }
    },
    loggedIn: false,
    location: {
        latitude: 0,
        longitude: 0
    },
    noti: {
        type: "no_alert",
        msg: ""
    },
    newAppointments:{},
    bookedAppointments: []
}
export function application(state = initialState, action) {

    switch (action.type) {
        case SUCCESS:
            return {
                ...state,
                noti: {
                    type: "success",
                    message: action.message,
                }
            };
        case ERROR:
            return {
                ...state,
                noti: {
                    type: "error",
                    message: action.message,
                }
            };
        case CLEAR:
            return {
                ...state,
                noti: {
                    type: "no_alert",
                    message: "",
                }
            };
        case REGISTER_REQUEST:
            return {
                ...state,
                registering: true,
                loading: true
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                registering: false,
                loading: false
            };
        case REGISTER_FAILURE:
            return {
                ...state,
                registering: false,
                loading: false
            };
        case LOGIN_REQUEST:
            return {
                ...state,
                loggedIn: false,
                loading: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                user: { ...action.payload },
                loading: false
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                user: {
                    user: {
                        name: ""
                    }
                },
                loggedIn: false,
                loading: false
            };
        case LOGOUT:
            return {
                ...state,
                user: {
                    user: {
                        name: ""
                    }
                },
                loggedIn: false,

            };
        case SET_LOCATION_REQUEST:
            return {
                ...state,
                location: {
                    latitude: 0,
                    longitude: 0
                },
                loading: true

            };
        case SET_LOCATION_SUCCESS:
            return {
                ...state,
                location: { ...action.payload },
                loading: false
            };
        case SET_LOCATION_FAILURE:
            return {
                ...state,
                location: {
                    latitude: 0,
                    longitude: 0
                },
                loading: false
            };
        case SET_SHOP_REQUEST:
        case SET_SERVICES_REQUEST:
        case BOOK_APPOINTMENT_REQUEST:
            return {
                ...state,
                loading: true
            };
        case SET_SHOP_SUCCESS:
            return {
                ...state,
                shop: { ...action.payload },
                loading: false
            };
        case SET_SERVICES_SUCCESS:
            return {
                ...state,
                services: action.payload,
                loading: false
            };
        case BOOK_APPOINTMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                newAppointments: { ...action.payload },
                // bookedAppointments: [...state.bookedAppointments, ...action.payload]
            }
        case SET_SHOP_FAILURE:
        case SET_SERVICES_FAILURE:
        case BOOK_APPOINTMENT_FAILURE:
            return {
                ...state,
                loading: false
            };

        default:
            return state
    }
}