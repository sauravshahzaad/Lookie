import axios from "axios";
const instance = axios.create({
  baseURL: "https://lookie-ss.herokuapp.com/",
});

export default instance;