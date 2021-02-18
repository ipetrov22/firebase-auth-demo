import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth';

const Home = () => {
    const auth = useContext(AuthContext);

    return (
        <div className="home-page">
            <h1>{auth ? 'user is auth' : 'user is NOT auth'}</h1>
        </div>
    );
};

export default Home;