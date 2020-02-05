import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './view/home';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      <Switch>
        <Route to="/" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
