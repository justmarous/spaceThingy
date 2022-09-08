import React from "react";
import Cockpit from "./components/Cockpit";
import store from "./redux/store";
import { Provider, useDispatch } from "react-redux";
import { addSecond } from "./redux/reducers/cockpitSlice";

function App() {
  return (
    <Provider store={store}>
      <Cockpit />
    </Provider>
  );
}

export default App;
