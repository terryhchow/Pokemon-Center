import React from "react";
import SignupFormContainer from './session/signup_form_container';
import { Link, Switch, Route } from "react-router-dom";
import NavBarContainer from '../components/nav_bar/nav_bar_container'
import SplashContainer from './splash/splash_container';
import ProductIndexContainer from './product/product_index_container'
import {AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './session/modal';

const App = () => (
    <div>
        <header>
            <Route path="/" component={NavBarContainer} />
        </header>
        <Modal/>
        <Switch>
            <Route exact path="/" component={SplashContainer} />
            <Route exact path="/products" component={ProductIndexContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;