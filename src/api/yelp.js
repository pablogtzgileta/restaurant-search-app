import axios from 'axios';
import config from '../config/secrets';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: `Bearer ${ config.YELP_KEY }`
    }
});
