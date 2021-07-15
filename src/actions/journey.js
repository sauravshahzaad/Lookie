import {
    JOURNEY_ADD_REQUEST,
    JOURNEY_ADD_SUCCESS,
    JOURNEY_ADD_FAILURE,
} from "../actionConstants/actionConstants"

import { alertActions } from "./alert"
// import { history } from "./history";
// import { userService } from "../services/userService";
import {journeyService} from "../services/journeyService"

// import { useHistory } from "react-router-dom";

  
  function addJourney(newJourney) {
    return (dispatch) => {
      dispatch(request(newJourney));
  
      journeyService.addJourney(newJourney).then(
        (res) => {
          console.log("on journey.js "+res)
          if(res==="Journey Added"){
            dispatch(success());
            // history.push("/login");
            dispatch(alertActions.success("Journey Added"));
          }else if(res==="Something Went Wrong")(
            dispatch(alertActions.error("Something Went Wrong"))
          )
          else{
            dispatch(failure("Journey not Added"));
            dispatch(alertActions.error("Journey not Added"));
          }
          
        },
        (error) => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
    };
  
    function request(newJourney) {
      return { type: JOURNEY_ADD_REQUEST, newJourney };
    }
    function success(newJourney) {
      return { type: JOURNEY_ADD_SUCCESS, newJourney };
    }
    function failure(newJourney) {
      return { type: JOURNEY_ADD_FAILURE, newJourney };
    }
  }
  
  function getUnApproved(newJourney) {
    return (dispatch) => {}
}

function getApproved(newJourney) {
    return (dispatch) => {}
}

function getSuccessfull(newJourney) {
    return (dispatch) => {}
}
  
  
  export const journeyActions = {
    addJourney,
    getUnApproved,
    getApproved,
    getSuccessfull,
    
  };
  