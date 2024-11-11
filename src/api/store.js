// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import notificacationsReducer from './slices/notifications-slice';

// Example slice can be added here
const store = configureStore({
  reducer: {
    notifications: notificacationsReducer
  },
});

export default store;
