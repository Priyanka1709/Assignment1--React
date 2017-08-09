import { join } from 'path';
import apiConfig from './apiConfig';

export function getAllCards(){
    return getRequest(join(apiConfig.baseUrl, apiConfig.cards));
}

export function getImage(imageUrl){
    return join(apiConfig.baseUrl, apiConfig.images, imageUrl);
}

function getRequest(url){
    return fetch(url)
            .then((response)=> {
                return response.json();
            })
            .then((data)=> data);
}