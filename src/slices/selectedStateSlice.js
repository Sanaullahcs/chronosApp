// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   selectedState: {
//     ownersTitlePolicy: 100,
//     closingFee: 395,
//     searchFee: 150,
//     municipalLineSearch: 175,
//   },
// };

// const stateSlice = createSlice({
//   name: "selectedState",
//   initialState,
//   reducers: {
//     setSelectedState: (state, action) => {
//       state.selectedState = action.payload;
//     },
//   },
// });

// export const { setSelectedState } = stateSlice.actions;

// export default stateSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   selectedState: null,
// };

// export const stateSlice = createSlice({
//   name: "selectedState",
//   initialState,
//   reducers: {
//     setSelectedState: (state, action) => {
//       state.selectedState = action.payload;
//     },
//   },
// });

// export const { setSelectedState } = stateSlice.actions;

// export default stateSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedState: "Illinois",
};

export const stateSlice = createSlice({
  name: "selectedState",
  initialState,
  reducers: {
    setSelectedState: (state, action) => {
      state.selectedState = action.payload;
    },
  },
});

export const { setSelectedState } = stateSlice.actions;

export default stateSlice.reducer;
