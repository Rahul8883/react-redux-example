import React from "react";
import "./App.css";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  
import UpDownCounter from "./component/upDownCounter";

function App() {
  return (
    <Router>  
    <div>  
      <h1>React Router Example</h1>  
      <Route path="/" component={UpDownCounter} />  
      <Route path="/about" component={<div>Hello world</div>} />  
      <Route path="/contact" component={<div>Rahul Ranjan</div>} />  
    </div>  
  </Router>  
  );
}

export default App;
