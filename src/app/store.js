import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice';
import userReducer from "./userSlice";
import productReducer from "./productSlice";
import adminReducer from "./adminSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    user: userReducer,
    product: productReducer,
    admin: adminReducer,
  },
});
