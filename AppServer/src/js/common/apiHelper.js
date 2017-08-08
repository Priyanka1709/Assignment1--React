import { join } from 'path';
import apiConfig from './apiConfig';
var axios= require('axios');

export function getAllCards(){
    return getRequest(join(apiConfig.baseUrl, apiConfig.cards));
}

function getRequest(url){
    return axios.get(url)
            .then((response)=> {
                return response.data;
            });
}