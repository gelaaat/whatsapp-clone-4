import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import conversationSlice from '../features/Conversation/conversationSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    conversation: conversationSlice
  },
  devTools: true //aixo s'ha de canviar si estem en produccio
});
