import axios from "axios";

const httpClient = axios.create();
httpClient.defaults.timeout = 150000;

export default class CustomerApi {
  static get() {
    return axios
      .get("http://127.0.0.1:5000/customers/all")
      .catch(function(error) {
        console.log(error);
      });
  }
  static post(body) {
    console.log('in sagas',body);
    const firstName = body.firstName ;
    return axios.post(`http://127.0.0.1:5000/customer/${firstName}`, {
      lastName:body.lastName,
      age:body.age,
      email:body.email
    });
  }

  static put(body) {
    console.log('in sagas',body);
    const firstName = body.firstName ;
    return axios.put(`http://127.0.0.1:5000/customer/${firstName}`, {
      lastName:body.lastName,
      age:body.age,
      email:body.email
    });
  }

  static delete(name) {
    console.log('in sagas',name);
    const firstName = name ;
    return axios.delete(`http://127.0.0.1:5000/customer/${firstName}`);
  }
}