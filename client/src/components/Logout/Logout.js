import { useHistory } from 'react-router-dom';
import { logout } from '../../services/userService';
import './Logout.scss';
const Login = () => {
    const history = useHistory();

    const submitForm = (e) => {
        e.preventDefault();

        logout()
            .then(() => {
                history.push('/');
            })
            .catch(err => alert(err));
    }

    return (
        <div className="logout-page">
            Logout
            <form className="logout-form" onSubmit={submitForm}>
                <button type="submit">Logout</button>
            </form>
        </div>
    );
};

export default Login;