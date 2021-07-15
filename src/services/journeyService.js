import axios from "../utilities/axios/axios";
export const journeyService = {
    addJourney,
    getUnApproved,
    getApproved,
    getSuccessfull,
  };

  async function addJourney(newJourney){
    const session_url = "/journey/createJourney"
    return await axios
    .post(session_url, newJourney, {
      headers: {
        "content-type": "application/json",
      },
    })
    .then((response) => {
        console.log(response);
        if (response.status === 200) {
          return "Journey Added";
        } else if (response.status === 403) {
          return "Something Went Wrong";
        } else {
          return "error";
        }
      })
      .catch(function (error) {
        console.log("Error on Adding Journey ...");
        return "Error on Adding Journey ...";
      });
  }

  async function getUnApproved(){
    const session_url = "/journey/getUnApproved"
    return await axios
    .get(session_url)
    .then((response) => {
        console.log(response);
        if (response.status === 200) {
          return response;
        } else if (response.status === 403) {
          return "Something Went Wrong";
        } else {
          return "error";
        }
      })
      .catch(function (error) {
        console.log("Error on getting Pending Journey ...");
        return "Error on getting Pending Journey ...";
      });
  }
  async function getApproved(newJourney){
    const session_url = "/journey/getApproved"
    return await axios
    .post(session_url, newJourney, {
      headers: {
        "content-type": "application/json",
      },
    })
    .then((response) => {
        console.log(response);
        if (response.status === 200) {
          return response;
        } else if (response.status === 403) {
          return "Something Went Wrong";
        } else {
          return "error";
        }
      })
      .catch(function (error) {
        console.log("Error on getting up Journey...");
        return "Error on getting up Journey ...";
      });
  }
  async function getSuccessfull(newJourney){
    const session_url = "/journey/createJourney"
    return await axios
    .post(session_url, newJourney, {
      headers: {
        "content-type": "application/json",
      },
    })
    .then((response) => {
        console.log(response);
        if (response.status === 200) {
          return "Journey Added";
        } else if (response.status === 403) {
          return "Something Went Wrong";
        } else {
          return "error";
        }
      })
      .catch(function (error) {
        console.log("Error on Adding Journey ...");
        return "Error on Adding Journey ...";
      });
  }