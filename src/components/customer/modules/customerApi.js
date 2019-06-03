import axios from "axios";

const httpClient = axios.create();
httpClient.defaults.timeout = 150000;

export default class CustomerApi {
  static get() {
    return axios
      .get("http://127.0.0.1:5000/customer/Thomas")
      .catch(function(error) {
        console.log(error);
      });
  }
 /* static post(body) {
    return axios.post("https://test-api.loop11.com/v1/slack/", {
      channel: body
    });
  }*/
}