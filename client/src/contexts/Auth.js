import { createContext, useState, useEffect } from 'react';
import firebase from '../firebase';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem('refreshTkn'));

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                const refreshTkn = user.refreshToken;
                localStorage.setItem('refreshTkn', refreshTkn);
            } else {
                localStorage.removeItem('refreshTkn');
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