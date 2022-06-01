import { createStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer
} from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import {rootReducer} from './store/reducers/rootReducer'

const persistConfig = {
    key: "player",
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer)

const persistor = persistStore(store);

export {
    store,
    persistor
}