import axios from "axios";
// axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
// Next we make an 'instance' of it
const instance = axios.create({
  // .. where we make our configurations
  baseURL: "https://nft-api.tom.finance/api",
});

// Where you would set stuff like your 'Authorization' header, etc ...
instance.defaults.headers.common["Authorization"] = `${localStorage.getItem(
  `accessToken`
)}`;
// Also add/ configure interceptors && all the other cool stuff
// instance.interceptors.request...

export default instance;
