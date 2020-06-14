import axios from './axios';

const token = () => {
    const authData = localStorage.getItem('authData');
    return authData ? JSON.parse(authData).idToken : null;
};

const api = {
    getQuestions: () => {
        const idToken = token();
        return axios.get('/questions.json?auth=' + idToken)
    },
    getTemplates: () => {
        const idToken = token();
        return axios.get('/templates.json?auth=' + idToken)
    }
}

export default api;