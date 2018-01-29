import React, { Component } from 'react';
import Header from "../components/common/header";
import { Headliners } from "../containers/headliners";
import { General } from "../containers/general";
import { Sources } from "../containers/sources";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter >
          <Switch>
            <Route path="/sources" render ={props => <Sources {...props} />} ></Route>
            <Route path="/general" render ={props => <General {...props} />} ></Route>
            <Route path="/" render ={props => <Headliners {...props} />} ></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
