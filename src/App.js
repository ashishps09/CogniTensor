import React from 'react';
import './App.css';
import axios from "axios";
import 'react-dropdown/style.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import representationComp from './components/representationComp/representationComp';


class App extends React.Component {
  
  render() {
    return (
      <Router>
        <div>
          <h2>BAR Representation</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/representationComp'} className="nav-link"> representationComp </Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/representationComp' component={representationComp} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;