import {configureStore} from "@reduxjs/toolkit";
import {usersApi} from "../../widgets/UserList/api/usersApi";
import {setupListeners} from "@reduxjs/toolkit/query";
import userReducer from '../../entities/user/model/userSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(usersApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
