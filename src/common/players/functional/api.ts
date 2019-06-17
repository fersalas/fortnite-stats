import axios from "axios";


export const getPlayer = ( params: api.Parameters) => 
    axios.get('/users/id', {
        params,
    });

export const getPlayerStats = ( params: api.Parameters) => 
    axios.get('/users/public/br_stats_v2', {
        params,
    });
