import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Router } from 'react-router-dom';
import { ThemeProvider } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/scss/bootstrap.scss";
import Routes from './Route';
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Footer from "./components/Footer/Footer";
ReactDOM.render(
    <Fragment>
        <BrowserRouter>
            <ThemeProvider>
                <Routes />
            </ThemeProvider>
        </BrowserRouter>
        <Footer/>
    </Fragment>,
    document.getElementById("root"));

serviceWorker.unregister();
