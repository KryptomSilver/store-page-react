import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../components/Nav";
import Home from "../views/Home";
import Orders from "../views/Orders";
import Sales from "../views/Sales";
import Users from "../views/Users";
import Products from "../views/Products";
const Routes = () => {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/sales" component={Sales} />
                <Route exact path="/orders" component={Orders} />
                <Route exact path="/users" component={Users} />
                <Route exact path="/products" component={Products} />

            </Switch>
        </Router>
    );
};

export default Routes;
