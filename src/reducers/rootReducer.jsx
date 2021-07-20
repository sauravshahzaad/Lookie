import { alert } from './alert';
import { application } from './application';
import { authentication } from './authentication';
import { combineReducers } from 'redux';
import { registration } from './registration';
import { users } from './users';

const rootReducer = combineReducers({
    authentication,
    registration,
    application,
    users,
    alert
});

export default rootReducer;