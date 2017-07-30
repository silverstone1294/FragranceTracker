// Default create-react-app
import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

// React Router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// My components
import App from "./components/App";
import Login from "./components/Login";

// Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";

// Other styles
import "./css/index.css";

const MainRoute = () =>
  <Router>
    <div>
      <Route exact path="/" component={App} />
    </div>
  </Router>;

ReactDOM.render(<MainRoute />, document.getElementById("root"));
registerServiceWorker();
