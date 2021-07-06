import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../components/Nav";
import Home from "../views/Home";
const Routes = () => {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
    );
};

export default Routes;
