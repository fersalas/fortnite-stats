import axios from "axios";


export const bookListApi = ( params: api.Parameters) => {
    return new Promise((resolve, reject) => {
        axios.get('/user/show/', {
            params,
        })
        .then(response => {
            console.log(response);
            resolve(response);
        })
        .catch(e => {
            console.log(e);
            reject(e);
        })
    });
};