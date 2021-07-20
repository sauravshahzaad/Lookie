import axios from "../utilities/axios/axios";



async function bookAppointment(appointment) {
    const session_url = "/bookAppointment"
    return await axios
        .post(session_url, appointment, {
        })
        .then((response) => {
            // console.log(response);
            if (response.data.success)
                return response;
            else if (!response.data.success) {
                return response;
            } else {
                return false
            }
        })
        .catch(function (error) {
            console.log("Error on Booking Appointment ...");
            return "Error on Booking Appointment ...";
        });
}


export const applicationService = {
    bookAppointment
}