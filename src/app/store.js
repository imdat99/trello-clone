import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../components/taskSlice";

export const store = configureStore({
  reducer: {
    [taskReducer.namespace]: taskReducer.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
