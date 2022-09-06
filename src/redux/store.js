import {configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger"
import cockpitReducer from "./reducers/cockpitSlice";

const middlewares = [logger]

const store = configureStore({
    reducer: {
        cockpit: cockpitReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(...middlewares)
})



export default store;
