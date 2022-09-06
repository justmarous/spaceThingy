import React from "react";
import Cockpit from "./components/Cockpit";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Cockpit />
    </Provider>
  );
}

export default App;
