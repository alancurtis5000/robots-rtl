import React from "react";
import { render } from "react-dom";
import 'tachyons';
import './index.css'; 
import App from './containers/App';
import { Provider } from "react-redux";
import configureAppStore from "./redux/configure-store";

const store = configureAppStore();

const renderApp = () =>
  render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./containers/App", renderApp);
}

renderApp();