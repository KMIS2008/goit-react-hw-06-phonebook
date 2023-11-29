import { configureStore } from "@reduxjs/toolkit";
import {filterReduser} from './filterSlice';
import {prestirReduserContact} from './contactSlice';
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';


export const store = configureStore({
  reducer: {
    contact: prestirReduserContact,
    filter: filterReduser,
  },

    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });


export const persistor = persistStore(store);