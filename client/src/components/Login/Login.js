import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../../services/userService';
import './Login.scss';
const Login = () => {
    const history = useHistory();
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        const newFormData = { ...formData };
        newFormData[e.target.name] = e.target.value;

        setFormData(newFormData);
    };

    const submitForm = (e) => {
        e.preventDefault();

        if (formData.email !== '' && formData.password !== '') {
            login(formData.email, formData.password)
                .then((res) => {
                    res.user.getIdToken()
                        .then(tkn => localStorage.setItem('idTkn', tkn))
                        .catch(err => console.log(err));
                    history.push('/');
                })
                .catch(err => alert(err.message));
        }
    }

    return (
        <div className="login-page">
            Login
            <form className="login-form" onSubmit={submitForm} >
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={handleChange} />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={handleChange} />

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;