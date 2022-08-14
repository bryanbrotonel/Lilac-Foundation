import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface NavbarState {
  theme: string;
}

const initialState: NavbarState = {
  theme: 'bg-transparent text-black-700 border-white-30', // default theme
};

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setNavbarDarkTheme: (state) => {
      state.theme = 'bg-secondary text-white-0 border-gray-700'; // dark theme
    },
    setNavbarTheme: (state, action) => {
      state.theme = action.payload;
    },
    resetNavbarTheme: (state) => {
      state.theme = initialState.theme;
    },
  },
});

export const { setNavbarDarkTheme, setNavbarTheme, resetNavbarTheme } =
  navbarSlice.actions;

export const getNavbarTheme = (state: RootState) => state.navbar.theme;

export default navbarSlice.reducer;
