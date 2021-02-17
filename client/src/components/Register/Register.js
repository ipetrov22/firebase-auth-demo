import { useState } from 'react';
import './Register.scss';

const Register = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        const newFormData = { ...formData };
        newFormData[e.target.name] = e.target.value;

        setFormData(newFormData);
    };

    const submitForm = (e) => {
        e.preventDefault();

        if (formData.email !== '' && formData.password !== '') {
            console.log('SUBMIT');
        }
    }

    return (
        <div className="register-page">
            Register
            <form className="register-form" onSubmit={submitForm}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={handleChange} />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={handleChange} />

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
