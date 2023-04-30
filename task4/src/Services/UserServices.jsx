import axios from 'axios';
let url = "http://localhost:3000/servers";

export const getServers = () => {
    return axios.get(url,{
        headers:{ 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
    });
}

export const addServer = (server) => {
    return axios.post(url, server)
}

export const deleteServer = (id) =>{
    return axios.delete(url+'/'+id)
}