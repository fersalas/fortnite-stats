import axios from "axios";


export const getUser = ( params: api.Parameters) => 
    axios.get('/users/id', {
        params,
    });

export const getUserStats = ( params: api.Parameters) => 
    axios.get('/users/public/br_stats_v2', {
        params,
    });
