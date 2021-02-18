import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';

const AppRouter = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/logout" component={Logout} />
            <Redirect to="/" />
        </Switch>
    )
};

export default AppRouter;