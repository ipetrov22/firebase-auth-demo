import { createContext, useState, useEffect } from 'react';
import firebase from '../firebase';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem('idTkn'));

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                user.getIdToken()
                    .then((tkn) => localStorage.setItem('idTkn', tkn))
                    .catch((err) => console.log(err));
            } else {
                localStorage.removeItem('idTkn');
            }
            setUser(user);
        });

        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
}