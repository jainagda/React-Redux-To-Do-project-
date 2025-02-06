import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice';
import userReducer from "../features/userSlice";
// import productReducer from "./productSlice";
// import adminReducer from "./adminSlice";
import {thunk} from "redux-thunk";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    user: userReducer,
    // product: productReducer,
    // admin: adminReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
