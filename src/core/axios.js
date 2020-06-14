import axios from 'axios';
import { toast } from 'react-toastify';

const instance = axios.create({
    baseURL: 'https://search-app-391dc.firebaseio.com/'
});

instance.interceptors.response.use((response) => {
        return response;
    }, function (error) {
        toast.error(error.response.data.error);

        return Promise.reject(error);
    });

export default instance;