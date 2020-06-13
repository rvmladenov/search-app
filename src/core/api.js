import axios from './axios';

const token = () => {
    const authData = localStorage.getItem('authData');
    return authData ? JSON.parse(authData).idToken : null;
};

const api = {
    getQuestions: () => {
        // TODO: Add a validation hadler
        const idToken = token();
        return axios
            .get('/questions.json?auth=' + idToken)
        // return axios.get('/questions.json', { 'headers': { 'Authorization': 'Bearer ' + idToken }})
    },
    getTemplates: () => {
        // TODO: Add a validation hadler
        const idToken = token();
        return axios.get('/templates.json?auth=' + idToken)
        // return axios.get('/templates.json', { 'headers': { 'Authorization': 'Bearer ' + idToken }} )
    }
}

export default api;