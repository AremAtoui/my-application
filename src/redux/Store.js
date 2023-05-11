import { configureStore } from '@reduxjs/toolkit';
import ParfumSlice from './ParfumSlice/ParfunSlice';




export default configureStore({
  reducer: {parfum :ParfumSlice },
})