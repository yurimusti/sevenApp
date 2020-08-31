import React from "react";

import Routes from "./routes";

import { Provider } from "react-redux";
import { store } from "./store";

import GlobalStyle from "./styles/index";

interface Props {}

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
      <GlobalStyle />
    </Provider>
  );
};

export default App;
