import axios from "axios";

import config from "@/config";
import { jsonUtils } from "@/utils/jsonUtils/jsonUtils";

const instance = axios.create({
    baseURL: process.env.DEV_APP_URL //bring this url using config file, not directly from the .env file{need changes}
});


export default async function axiosCall(URL : string, method : string, params=null, headers = null, payload=null):Promise<any>{
    let response;
    let configJson : any = {}
    let headersJson = {};

    if (params !== null && !jsonUtils.isEmpty(params)) {
        configJson['params'] = params;
    }

    // if (localStorage.getItem('token')) {
    //     headersJson = {
    //         'x-auth-token': localStorage.getItem('token')
    //     }
    // }

    if (headers !== null && !jsonUtils.isEmpty(headers)) {
        headersJson = headers['headers']
    }

    configJson['headers'] = headersJson
    
    if(method === 'GET') {
        response = await instance.get(URL, configJson);
    }

    if(method === 'POST') {
        response = await instance.post(URL, payload, configJson);
    }

    return response;
}