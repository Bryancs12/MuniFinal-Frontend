import axios from "axios";


const instance = axios.create({
    //baseURL: process.env.API_URL
    baseURL: process.env.REACT_APP_API_URL,
    // timeout: 1000,
     //headers: {'X-Custom-Header': 'foobar'}
  });

  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers = config.headers ?? {};
    if (token && token!=="undefined") {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


export const postData = (endpoint, data) =>{
    return instance.post(endpoint,data)
  }

  export const getData = (endpoint) =>{
    return instance.get(endpoint)
  }

