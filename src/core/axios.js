import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://search-app-391dc.firebaseio.com/'
});

export default instance;