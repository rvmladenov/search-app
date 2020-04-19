import axios from './axios';

const api = {
    getQuestions: () => {
        return axios.get('/questions.json')
    },
    getTemplates: () => {
        return axios.get('/templates.json')
    }
}

export default api;