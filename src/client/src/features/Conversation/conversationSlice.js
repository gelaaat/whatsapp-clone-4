import { createSlice } from "@reduxjs/toolkit";
import { setConversationView } from "./conversationActions";

const initialState = {
  loading: false,
  error: null,
  selectedView: false,
  actualConversation: null,
  dateInitial: null,
  users: null,
  messages: null
}
  

const conversationSlice = createSlice({
  name: 'conversation',
  initialState,
  reducers: {

  },
  extraReducers: {
    [setConversationView.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [setConversationView.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.actualConversation = payload
    },
    [setConversationView.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  }
})

export default conversationSlice.reducer