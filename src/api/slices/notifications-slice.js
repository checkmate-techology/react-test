import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification(state, { payload }) {
      // @TODO
    }
  },
  extraReducers: (builder) => {}
});


export const { addNotification } = notificationsSlice.actions

export const selectNotifications = (state) => state.notifications;

export default notificationsSlice.reducer
