import React from 'react';

import '../style.scss';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch,
} from 'react-router-dom';
import Counter from './counter';
import Controls from './controls';

const About = (props) => {
    return <div> All there is to know about me </div>;
};

const Welcome = (props) => {
    return (
        <div>
            <Controls />
            Welcome
        </div>
    );
};

const Test = (props) => {
    return (
        <div>
            <Counter />
            ID: {props.match.params.id}
        </div>

    );
};

const FallBack = (props) => {
    return <div>URL Not Found</div>;
};

const Nav = (props) => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/about" exact>About</NavLink></li>
                <li><NavLink to="/test/id1">test id1</NavLink></li>
                <li><NavLink to="/test/id2">test id2</NavLink></li>
            </ul>
        </nav>
    );
};

const App = (props) => {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route path="/about" component={About} />
                    <Route exact path="/test/:id" component={Test} />
                    <Route component={FallBack} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
