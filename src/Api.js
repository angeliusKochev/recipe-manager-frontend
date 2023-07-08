import axios from 'axios';

const Api = ()=>{
 console.log({ URl: process.env.REACT_APP_BACKEND_API });
  return axios.create({
    baseURL: process.env.REACT_APP_BACKEND_API,
  });
}

export default Api;