import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setConversationView = createAsyncThunk(
  'conversation/setConversation',
  async ({ contactId }, { rejectWithValue }) => {
    try {
      
      const config = {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true,
        params: {
          contactId: contactId
        }
      }

      const { data } = await axios.get(
        `http://localhost:8000/api/getConversation`,
        config
      )

      return data

    } catch (error) {
      
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const sendMessage = createAsyncThunk(
  'conversation/sendMessage',
  async ({ message }, { rejectWithValue }) => {
    try {
      
      const config = {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      }

      const { data } = await axios.get(
        `http://localhost:8000/api/sendMessage`,
        { message },
        config
      )

      return data

    } catch (error) {
      
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)