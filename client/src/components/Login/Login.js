
import './Login.scss';
const Login = () => {
    return(
        <div className="login-page">
            Login
            <form className="login-form">
                <label htmlFor="email">Email</label>
                <input type="email" />

                <label htmlFor="password">Password</label>
                <input type="password" />

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;