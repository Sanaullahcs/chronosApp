import { configureStore } from "@reduxjs/toolkit";

import sellerSlice from "../slices/sallerSlice";
import buyerSlice from "../slices/buyerSlice";
import selectedStateSlice from "../slices/selectedStateSlice";
import userSlice from "../slices/userSlice";
import authSlice from "../slices/authSlice";

export const store = configureStore({
  reducer: {
    seller: sellerSlice,
    buyer: buyerSlice,
    selectedState: selectedStateSlice,
    user: userSlice,
    auth: authSlice,
  },
});
