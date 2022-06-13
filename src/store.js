import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from './features/userSlice';
import { 
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
}
 from "redux-persist";
 import storage from 'redux-persist/lib/storage';
import userSlice from "./features/userSlice";
 const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}
const persistedReducer = persistReducer(persistConfig, userSlice);
export default configureStore({
    reducer: {
        user: persistedReducer
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
})