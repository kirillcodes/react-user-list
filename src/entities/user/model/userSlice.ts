import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {UserCardType, UserStateType} from "./types";

const initialState: UserStateType = {
  favorites: [],
  foundFavorites: [],
  selectedUser: null,
  searchValue: '',
  isModal: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getFavoriteUsers(state) {
      state.favorites = JSON.parse(localStorage.user);
    },
    addUserToFavorites(state, action: PayloadAction<UserCardType>) {
      if (!state.favorites.some(user => user.id === action.payload.id)) {
        state.favorites.push(action.payload);
        localStorage.user = JSON.stringify(state.favorites);
      } 
    },
    removeUserFromFavorites(state, action: PayloadAction<number>) {
      state.favorites = state.favorites.filter(user => user.id !== action.payload);
      state.foundFavorites = state.foundFavorites.filter(user => user.id !== action.payload);
      localStorage.user = JSON.stringify(state.favorites);
    },
    searchFavorite(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
      state.foundFavorites = state.favorites.filter(user => {
        if (user.username.toLowerCase().includes(action.payload) || user.name.toLowerCase().includes(action.payload)) {
          return user;
        }
      })
    },
    selectUser(state, action: PayloadAction<UserCardType>) {
      state.selectedUser = action.payload;
    },
    toggleModal(state) {
      state.isModal = !state.isModal;
      if (!state.isModal) {
        state.selectedUser = null;
      }
    },
    createUser(state, action: PayloadAction<UserCardType>) {
      state.favorites.push({...action.payload, id: state.favorites.length + 100});
      localStorage.user = JSON.stringify(state.favorites);
    },
    editUser(state, action: PayloadAction<UserCardType>) {
      state.favorites = state.favorites.map((user)=> {
        if (user.id === state.selectedUser?.id) {
          return action.payload; 
        }
        return user;
      });
      localStorage.user = JSON.stringify(state.favorites);
    }
  }
})

export const {
  getFavoriteUsers,
  addUserToFavorites,
  removeUserFromFavorites,
  searchFavorite,
  selectUser,
  toggleModal,
  createUser,
  editUser
} = userSlice.actions;

export default userSlice.reducer;
