import requester from '../helpers/requester';
const url = 'http://localhost:5000';

export const getAllPhones = (idToken) => {
    return requester.get(`${url}/phone?idToken=${idToken}`);
}