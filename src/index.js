import * as React from "react";
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ApplicationShell from './components/ApplicationShell';
import appReducers from "./reducers/reducers";
import getInitialData from "./utils"
import "./index.css";

let store = createStore(appReducers, getInitialData());

ReactDOM.render(
    <Provider store={store}>
        <ApplicationShell/>
    </Provider>,
    document.getElementById("root")
);