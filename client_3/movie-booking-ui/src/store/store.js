import { configureStore } from "@reduxjs/toolkit";
// import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { bookingReducer } from "./reducers/BookingReducer";
// import { reset } from "./actions";
export const store = configureStore({
  reducer: {
    bookingReducer,
  },
});

// export { store, addSong, removeSong, addMovie, removeMovie, reset };
