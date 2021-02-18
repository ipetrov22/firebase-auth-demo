import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { register } from '../../services/userService';
import './Register.scss';

const Register = () => {
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
            register(formData)
                .then(res => res.json())
                .then(data => {
                    if (data.error) {
                        throw data.error;
                    }
                    console.log(data);
                    history.push('/login');
                })
                .catch(err => {
                    alert(err);
                });

        }
    }

    return (
        <div className="register-page">
            Register
            <form className="register-form" onSubmit={submitForm}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={handleChange} />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={handleChange}/>

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
