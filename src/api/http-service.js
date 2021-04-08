import axios from "axios";

export default function $axios(options) {
    return new Promise((resolve, reject) => {
        const instance = axios.create({
            headers: {
                Accept: "application/json",
                Authorization:
                    "Bearer HMUCvgjAVLxEmkUVN4mrwkiSXMalQyUxVc5umVG8TJAXxw3GazyzLd19XaGn",
            },
            baseURL: "https://challenge.thef2e.com/api/thef2e2019/stage6"
        });

        instance(options)
            .then(res => {
                resolve(res);
                return false;
            })
            .catch(error => {
                reject(error);
            });
    });
}
