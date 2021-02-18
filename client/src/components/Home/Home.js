import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../contexts/Auth';
import { getAllPhones } from '../../services/phoneService';

const Home = () => {
    const auth = useContext(AuthContext);
    const [phones, setPhones] = useState(null);

    useEffect(() => {
        getAllPhones()
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    throw data.error;
                }
                setPhones(data);
            })
            .catch((err) => alert(err));
    }, []);

    return (
        <div className="home-page">
            <h1>{auth ? 'user is auth' : 'user is NOT auth'}</h1>

            {phones ?
                phones.map(x => <p key={x._id}>{x.brand}-{x.model}</p>)
                : null
            }
        </div>
    );
};

export default Home;