// import { authHeader } from '../_helpers';
// import axios from "axios";
import axios from "../utilities/axios/axios";
// import { axiosUrl } from "../axiosUrl";
export const userService = {
  login,
  logout,
  register,
  getAll,
  getById,
  update,
  delete: _delete,
};

async function login(emails, password) {
  const session_url = "/users/authenticate"
  const email = emails;
  const pass = password;
  return await axios
    .post(
      session_url,
      {
        email: email,
        password: pass,
      },
      {
      }
    )
    .then(function (response) {
      // console.log(response);
      console.log("user => " + JSON.stringify(response.data));
      if (response.data.success)
        return response.data;
      else if (!response.data.success) {
        return false;
      } else {
        return false
      }
    })
    // .then((result)=>{
    //     console.log(`here result is ${JSON.stringify(result)}`)
    //     return result;
    // })
    .catch(function (error) {
      console.log("Error on Authentication");
    });
}

async function logout() {
  // remove user from local storage to log user out
  const session_url = "/users/signOut" //"http://localhost:5003/users/login" //`${axiosUrl}+/users/logout`;
  return await axios
    .get(session_url, {})
    .then((response) => {
      // console.log(response);
      if (response.status === 200) {
        localStorage.removeItem("user");
        return "logout";
      }
    })
    .catch(function (error) {
      console.log("Failed to logOut");
    });
}

function getAll() {
  const requestOptions = {
    method: "GET",
    // headers: authHeader()
  };

  return fetch(`/users`, requestOptions).then(handleResponse);
}

function getById(id) {
  const requestOptions = {
    method: "GET",
    // headers: authHeader()
  };

  return fetch(`/users/${id}`, requestOptions).then(handleResponse);
}

async function register(user) {
  const session_url = "/users/register"
  return await axios
    .post(session_url, user, {
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
      console.log("Error on reistering ...");
      return "Error on reistering ...";
    });
}

// return fetch(`/users/register`, requestOptions).then(handleResponse);
// }

function update(user) {
  const requestOptions = {
    method: "PUT",
    headers: {
      // ...authHeader(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };

  return fetch(`/users/${user.id}`, requestOptions).then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  const requestOptions = {
    method: "DELETE",
    // headers: authHeader()
  };

  return fetch(`/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  console.log(response);
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    console.log("text => " + text);
    console.log("data => " + data);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        // location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
