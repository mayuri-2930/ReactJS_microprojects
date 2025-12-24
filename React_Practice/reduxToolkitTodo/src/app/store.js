import {configureStore} from '@reduxjs/toolkit'
import { todoSlice } from '../features/todo/todoSlice'
const todoReducer = todoSlice.reducer;
export const store = configureStore ({
    reducer: todoReducer

})