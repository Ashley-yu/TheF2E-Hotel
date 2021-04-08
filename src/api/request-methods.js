import axios from "./http-service";

export function Get(url, params) {
    return axios({
        url,
        params,
        method: "get"
    });
}

export function Post(url, params, data) {
    return axios({
        url,
        params,
        data,
        method: "post"
    });
}

export function Put(url, params, data) {
    return axios({
        url,
        params,
        data,
        method: "put"
    });
}

export function Delete(url, params) {
    return axios({
        url,
        params,
        method: "delete"
    });
}

export default {
    Get,
    Post,
    Put,
    Delete
};
