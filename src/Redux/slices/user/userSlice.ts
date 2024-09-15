import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorageHelper from 'Utilts/AsyncStorage/AsyncStorageHelper';

export interface User {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: string;
  username: string;
  user_id: number;
  account_fullname: string;
  jti: string;
  scope: string;
}

interface userState {
  user: User | null;
}

const initialState: userState = {
  user: null,
};

export const removeUser = createAsyncThunk('user/logout', async () => {
  await AsyncStorageHelper.removeItem('user');
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(removeUser.fulfilled, (state) => {
      state.user = initialState.user;
    });
  },
});

export const {setUser} = userSlice.actions;

export default userSlice.reducer;
