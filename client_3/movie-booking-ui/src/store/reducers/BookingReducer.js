import { createSlice } from "@reduxjs/toolkit";
// import {createSlice}=require("@reduxjs/toolkit")

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    selectedSeats: [],
    seatPrice: 150,
  },
  reducers: {
    select: (state, action) => {
      console.log(action.type);
      console.log(action.payload);
      state.selectedSeats.push(action.payload);
    },
    removeSelected: (state, action) => {
      const index = state.selectedSeats.indexOf(action.payload);
      state.selectedSeats.splice(index, 1);
    },
    // removeSong(state, action) {},
  },
  //   extraReducers(builder) {
  //     builder.addCase(reset, (state, action) => {
  //       return [];
  //     });
  //   },
});

export const bookingReducer = bookingSlice.reducer;

// exporting actions.
export const { select, removeSelected } = bookingSlice.actions;

// exporting Selector
export const bookingSelector = (state) => state.bookingReducer.selectedSeats;
export const priceSelector = (state) => state.bookingReducer.seatPrice;
