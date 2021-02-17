import requester from '../helpers/requester';

const url = 'http://localhost:5000';
export const register = (data) => {
    return requester.post(`${url}/user/register`, data);
}