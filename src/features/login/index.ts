import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IFormData {
  email: string;
  password: string;
}

export const login = createAsyncThunk<IAuthState, IFormData>(
  'auth/login',
  async (value, { rejectWithValue }) => {
    const response = await fetch(`https://backend-eg0t.onrender.com/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(value)
    });
    const data = await response.json();
    return data;
  }
);

export interface IAuthState {
  accesstoken: string;
}

const initialState: IAuthState = {
  accesstoken: ''
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {});
    builder.addCase(login.fulfilled, (state, action: PayloadAction<IAuthState>) => {
      state.accesstoken = action.payload.accesstoken;
    });
  }
});

export default authSlice.reducer;
