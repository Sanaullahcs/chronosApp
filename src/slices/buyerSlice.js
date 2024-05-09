import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {},
  closingCost: 0,
};

export const buyerSlice = createSlice({
  name: "buyer",
  initialState,
  reducers: {
    setBuyerData: (state, action) => {
      state.formData = action.payload;
    },
  },
});

export const { setBuyerData } = buyerSlice.actions;
// export const selectClosingCostFormatted = (state) => {
//   return state.seller.closingCost.toFixed(2);
// };
export default buyerSlice.reducer;
