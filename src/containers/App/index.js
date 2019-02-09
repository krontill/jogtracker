import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import './header.css';
import './app.css';
import './main.css';
import Logo from "../../components/Logo";
import Controls from "../../components/Controls";
import indexRoutes from '../../routes';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <Logo/>
          <Controls/>
        </header>
        <main className="main">
          <Switch>
            {indexRoutes.map((prop, key) => {
              return <Route exact path={prop.path} component={prop.component} key={key}/>;
            })}
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
