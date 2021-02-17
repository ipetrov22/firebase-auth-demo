import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li>
                        <Link className="link" to="/">Home</Link>
                    </li>

                    <li>
                        <Link className="link" to="/login">Login</Link>
                    </li>

                    <li>
                        <Link className="link" to="/register">Register</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;