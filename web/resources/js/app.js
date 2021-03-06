/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require("./bootstrap");

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { Router } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
import { history } from "./helpers/history";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { CustomTheme } from "./constants/theme";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

import "./styles/app.scss";

const store = configureStore();

const theme = createMuiTheme(CustomTheme);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <MuiThemeProvider theme={theme}>
                {" "}
                <App />
            </MuiThemeProvider>
        </Router>
    </Provider>,
    document.getElementById("root")
);
