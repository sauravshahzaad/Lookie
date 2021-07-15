import {JOURNEY_ADD_FAILURE,JOURNEY_ADD_SUCCESS,JOURNEY_ADD_REQUEST} from "../actionConstants/actionConstants"

export function journey(state = {}, action) {
    switch (action.type) {
        case JOURNEY_ADD_REQUEST:
            return { adding: true };
        case JOURNEY_ADD_SUCCESS:
            return {adding: false};
        case JOURNEY_ADD_FAILURE:
            return {adding: false};
        default:
            return state
    }
}