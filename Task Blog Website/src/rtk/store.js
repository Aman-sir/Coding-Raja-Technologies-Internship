import { configureStore } from '@reduxjs/toolkit'
import Blogreducer from "./slice"
export const store = configureStore({
  reducer:{
    BlogData:Blogreducer,
  },
})