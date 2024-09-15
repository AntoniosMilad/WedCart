// Redux/LoginSlice.ts

import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import authService from 'Api/Auth/authService';
import {
  CountryCode,
  isValidPhoneNumber,
  parsePhoneNumber,
} from 'libphonenumber-js';
import {AppDispatch} from 'Redux/Store';
import AsyncStorageHelper from 'Utilts/AsyncStorage/AsyncStorageHelper';
import {bodyEncoderCrypto} from 'Utilts/bodyEncoder/bodyEncoder';
import {setUser} from './user/userSlice';
interface LoginPayload {
  values: {
    phone: string;
    password: string;
  };
  code: string;
}

interface LoginResponse {
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

interface LoginState {
  isLoading: boolean;
  isLoggedIn: boolean;
  userToken: string | null;
  userName: string | null;
  LoginUserPhone: string | null;
  error: Record<string, any> | null;
}

const initialState: LoginState = {
  isLoading: false,
  isLoggedIn: false,
  userToken: null,
  userName: null,
  LoginUserPhone: null,
  error: null,
};

// Async thunk action for login
export const login = createAsyncThunk<
  LoginResponse,
  LoginPayload,
  {dispatch: AppDispatch}
>('auth/login', async (payload: LoginPayload, {dispatch, rejectWithValue}) => {
  const {values, code} = payload;
  const {number} = parsePhoneNumber('+' + code + values.phone);

  const dataToSend = {
    username: number,
    password: values.password,
  };

  const isVaildNumber = isValidPhoneNumber(
    dataToSend.username,
    code.toLocaleUpperCase() as CountryCode,
  );
  if (!isVaildNumber) {
    return rejectWithValue({message: 'InvalidPhoneNumber'});
  }
  const loginEncryptedData = bodyEncoderCrypto(dataToSend);

  try {
    const response = (await authService.Login(
      loginEncryptedData,
    )) as LoginResponse;

    await AsyncStorageHelper.setItem('user', JSON.stringify(response));
    dispatch(setUser(response));
    return response;
  } catch (error) {
    if (!error) {
      throw error;
    }

    return rejectWithValue(error);
  }
});

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setIsLoggedIn(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
    },
    setUserToken(state, action: PayloadAction<string | null>) {
      state.userToken = action.payload;
    },
    setError(state, action: PayloadAction<Record<string, any>>) {
      state.error = action.payload;
    },
    setLoginUserPhone(state, action: PayloadAction<string>) {
      state.LoginUserPhone = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<LoginResponse>) => {
          state.isLoading = false;
          state.isLoggedIn = true;
          state.userToken = action.payload?.access_token;
          state.userName = action.payload?.account_fullname;
          state.error = null;
        },
      )
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.error = action.payload || 'Unknown error';
      });
  },
});

export const {setIsLoggedIn, setUserToken, setError, setLoginUserPhone} =
  loginSlice.actions;

export default loginSlice.reducer;
