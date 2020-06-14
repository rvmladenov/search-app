import axios from 'axios';
import { toast } from 'react-toastify';
import { history } from '../index';

const instance = axios.create({
    baseURL: 'https://search-app-391dc.firebaseio.com/'
});

instance.interceptors.response.use((response) => {
        return response;
    }, function (error) {
        toast.error(error.response.data.error);

        switch(error.response.status) {
            case 401: {
                localStorage.clear();

                history.push('/login');
            break;
            }
        }

        return Promise.reject(error);
    });

export default instance;