import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  isAuthenticated: boolean;
  login: string | null;
  error: string | null;
}

const initialState: UserState = {
  isAuthenticated: false,
  login: null,
  error: null,
};

// Фейковый аккаунт
const FAKE_USER = {
  login: 'testuser',
  password: 'testpass',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ login: string; password: string }>) {
      const { login, password } = action.payload;
      if (login === FAKE_USER.login && password === FAKE_USER.password) {
        state.isAuthenticated = true;
        state.login = login;
        state.error = null;
      } else {
        state.isAuthenticated = false;
        state.login = null;
        state.error = 'Неверный логин или пароль';
      }
    },
    logout(state) {
      state.isAuthenticated = false;
      state.login = null;
      state.error = null;
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export const { login, logout, clearError } = userSlice.actions;
export default userSlice.reducer;