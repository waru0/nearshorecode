import axios from 'axios';

const defaultOptions = {
  baseURL: 'http://localhost:3000/api/',
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
  },
};
const axiosInstance = axios.create( defaultOptions );

const getRequest = async ( url ) =>
{
  return await axiosInstance.get( url );
}
const postRequest = async ( url, object ) => 
{

  return await axiosInstance.post( url, object );
}



export default {
  getRequest,
  postRequest,

};
