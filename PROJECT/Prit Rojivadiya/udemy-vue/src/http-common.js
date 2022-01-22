import axios from "axios";
import {userStore} from './store/user'

export default axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-type": "application/json",
    'x-access-token': userStore.state.token
  }
});