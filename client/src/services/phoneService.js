import requester from '../helpers/requester';

const url = 'http://localhost:5000';

export const getAllPhones = () => {
    return requester.get(`${url}/phone?idToken=${localStorage.getItem('idTkn')}`);
}