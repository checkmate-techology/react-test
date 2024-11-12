import { createSlice } from '@reduxjs/toolkit';

const initialState = [ 
  { 
    user: 'Brian',
    type: 'info',
    message: 'message',
    time: '2024-11-11 22:15:01'
  }
];

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
