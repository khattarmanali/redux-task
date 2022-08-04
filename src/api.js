import axios from "axios";
export default axios.create({
  baseURL: "https://api.nxgsolutions.in",
  headers: {
    "Content-type": "application/json",
  },
});
