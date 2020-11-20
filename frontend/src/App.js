import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import UpdateProduct from './pages/UpdateProduct';
import CreateProduct from './pages/CreateProduct';
import './index.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route path="/new" component={ CreateProduct } />
        <Route path="/edit/:id" component={ UpdateProduct } />
        {/* <Route path="/delete/:id" component={ UpdatePerson } /> */}
      </Switch>
    </Router>
  );
}

export default App;
