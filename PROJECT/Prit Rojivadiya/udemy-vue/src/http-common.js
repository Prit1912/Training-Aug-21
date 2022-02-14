import axios from "axios";
import store from './store/index';

export default axios.create({
  baseURL: `http://${process.env.VUE_APP_Host}:${process.env.VUE_APP_Port}`,
  headers: {
    "Content-type": "application/json",
    'x-access-token': store.state.user.token
  }
});
