import {CLEAR, ERROR, SUCCESS} from "../actionConstants/actionConstants"

export function success(message) {
    return { type: SUCCESS, message };
}

export function error(message) {
    return { type: ERROR, message };
}

export function clear() {
    return { type: CLEAR };
}
export const alertActions = {
    success,
    error,
    clear
};
