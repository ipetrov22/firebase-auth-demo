import requester from '../helpers/requester';
import firebase from '../firebase';

const url = 'http://localhost:5000';

export const register = (data) => {
    return requester.post(`${url}/user/register`, data);
}

export const login = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
}