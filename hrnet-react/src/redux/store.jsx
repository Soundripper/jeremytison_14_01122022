import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import  userSlice  from './reducer';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist';

const persistConfig = {
    key: 'saveUserReducerPersist',
    storage,
}

const persistedReducer = persistReducer(persistConfig, userSlice);

const reducers = combineReducers({
    saveUserReducer: persistedReducer,
  });
  
export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore],
      },
    }),
})

export const persistor = persistStore(store)
