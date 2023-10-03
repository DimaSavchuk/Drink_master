import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filtersReducer } from './filters/filtersSlice';
import { drinksReducer } from './drinks/drinksSlice';
import { routeReducer } from './route/routeSlice';
import { motivationReducer } from './motivation/motivationSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const routePersistConfig = {
  key: 'route',
  storage,
  whitelist: ['route'], // List of slices to persist
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    filters: filtersReducer,
    cocktails: drinksReducer,
    route: persistReducer(routePersistConfig, routeReducer),
    motivation: motivationReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

