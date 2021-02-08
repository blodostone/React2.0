import React from "react";
import { BrowserRouter as Router, Router, Switch, Link} from 'react-router-dom'
import User from './User'

const App = () => {
    return (
        <Router>
            <div class="page">
                <div class="page__content">
                    <h1>Users</h1>
                    <ul class="navigation">
                        <li class="navigation__item">
                            <Link href="/users/github">Github</Link>
                        </li>
                        <li class="navigation__item">
                            <Link href="/users/facebook">Facebook</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route path= "/users/userId" component={User} />
                        <Route path="/">
                            <span>Select a user please</span>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;