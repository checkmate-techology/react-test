import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    messagePopOut(state) {
      state.message.show = false;
    },
    messagePopUp(state, { payload }) {
      state.message = {...payload, show: true}
    }
  },
  extraReducers: (builder) => {}
});


export const { messagePopOut, messagePopUp } = notificationsSlice.actions

export const selectNotifications = (state) => state.notifications;

export default notificationsSlice.reducer
