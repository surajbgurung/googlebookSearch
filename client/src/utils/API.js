import axios from "axios";
import GBooksAPIKey from "./googleBooksAPI";
//how do I get dotenv to work? this exposes my apikey, but it won't read from .env for some reason
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = GBooksAPIKey;

export default {
  search: function (query) {
    return axios.get(BASEURL + query + APIKEY);
  },
};
