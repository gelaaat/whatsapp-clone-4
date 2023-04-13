import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const backendURL = 'http://localhost:8000'

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ username, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const { data } = await axios.post(
        `${backendURL}/api/register-local`,
        { username, email, password },
        config
      )

      return data
      
    } catch (error) {
      
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        console.log(error, 'entro al error del else')
        return rejectWithValue(error.message)
      }
    }
  }
)

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      
      const config = {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      }

      const { data } = await axios.post(
        `http://localhost:8000/api/login-local`,
        { username, password },
        config
      )

      return data

    } catch (error) {
      console.log('entro al error del login')
      console.log(error)

      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const sendRequestFriend = createAsyncThunk(
  'user/addFriend',
  async ({ username }, { rejectWithValue }) => {
    try {
      
      const config = {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      }

      console.log('faig el fetch de afegir un friend')

      const { data } = await axios.post(
        `http://localhost:8000/api/addContact`,
        { username },
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

export const acceptRequestFriend = createAsyncThunk(
  'user/acceptRequest',
  async ({ contactId }, { rejectWithValue }) => {
    try {

      const config = {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      }


      const { data } = await axios.post(
        `http://localhost:8000/api/acceptContactRequest`,
        { contactId },
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

export const logout = createAsyncThunk(
  'auth/logout',
  async ({}, { rejectWithValue }) => {
    try {
      
      const config = {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      }

      const { data } = await axios.delete(
        `http://localhost:8000/api/logout`,
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

export const getUpdatedUserInfo = createAsyncThunk()