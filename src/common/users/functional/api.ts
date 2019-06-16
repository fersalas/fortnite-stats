import axios from "axios";


export const getUserUid = ( params: api.Parameters) => 
    axios.get('/users/id', {
        params,
    });
