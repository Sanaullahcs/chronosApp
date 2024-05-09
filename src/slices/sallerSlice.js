import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {},
  closingCost: 0,
  sellerOtherFees: {},
};

export const sellerSlice = createSlice({
  name: "seller",
  initialState,
  reducers: {
    setSellerData: (state, action) => {
      state.formData = action.payload;
    },
    setClosingCost: (state, action) => {
      state.closingCost = action.payload;
    },
    setSellerOtherFees: (state, action) => {
      state.sellerOtherFees = action.payload;
    },
  },
});

export const { setSellerData, setClosingCost, setSellerOtherFees } =
  sellerSlice.actions;
export const selectClosingCostFormatted = (state) => {
  return state.seller.closingCost.toFixed(2);
};
export default sellerSlice.reducer;
