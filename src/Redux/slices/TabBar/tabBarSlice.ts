import {createSlice} from '@reduxjs/toolkit';

export type TabBarAction = 'SHOWTABBAR' | 'HIDETABBAR' | 'HIDEBOTHTABBARS';
export interface TabBarState {
  visible: TabBarAction;
  isAddPostStack?: boolean;
}

const initialState: TabBarState = {
  visible: 'SHOWTABBAR',
  isAddPostStack: false,
};

const tabBarSlice = createSlice({
  name: 'tabBar',
  initialState: initialState,
  reducers: {
    toggleTabBar: (state, action) => {
      state.visible = action.payload;
    },
    hideTabBar: (state) => {
      state.visible = 'HIDETABBAR';
    },
    showTabBar: (state) => {
      state.visible = 'SHOWTABBAR';
    },
    hideBothTabBars: (state, action) => {
      state.isAddPostStack = action.payload;
    },
  },
});

export const {toggleTabBar, showTabBar, hideTabBar, hideBothTabBars} =
  tabBarSlice.actions;

export default tabBarSlice.reducer;
