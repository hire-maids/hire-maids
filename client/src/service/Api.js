import axios from "axios";
export default () => {
  return axios.create({
    baseURL: 'https://binbackend.reliefbusinessnetwork.com/api/v1/'
  });
};
//http://localhost:3001/api/v1/
//https://binbackend.reliefbusinessnetwork.com/api/v1/