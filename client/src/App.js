import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import ContactState from "./Context/Contact/ContactState";
import AuthState from "./Context/Auth/AuthState";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import AlertState from "./Context/Alert/AlertState";
import Alerts from "./Components/Layout/Alerts";
import SetAuthToken from "./Utils/SetAuthToken";
import PrivateRoute from "./Components/Routing/PrivateRoute";

if (localStorage.token) {
  SetAuthToken(localStorage.token)
};

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className='code'>
                <Alerts />
                <Switch>
                  <PrivateRoute exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
