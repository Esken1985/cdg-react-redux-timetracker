import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { rootReducer, saveToLocalStorage, loadFromLocalStorage } from "./redux/reducers/rootReducer";

const persistedState = loadFromLocalStorage()
const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));
store.subscribe(() => saveToLocalStorage(store.getState()))
// localStorage.clear()


ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
