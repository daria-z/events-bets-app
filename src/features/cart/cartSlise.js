import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BETS_URL = "http://localhost:3000/bets";

const initialState = {
  coefSum: 0,
  betAmount: 0,
  bets: [],
};

export const placeNewBet = createAsyncThunk("posts/addNewBet", async (initialBet) => {
  const response = await axios.post(BETS_URL, initialBet);
  return response.data;
});

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.bets.push(action.payload);
      state.coefSum += action.payload.coef;

      return state;
    },
    clearCart: (state, action) => {
      state.betAmount = 0;
      state.coefSum = 0;
      state.bets = [];

      return state;
    },
    removeBet: (state, action) => {
      const id = action.payload;
      const betItem = state.bets.find((bet) => bet.id == id);
      if (betItem) {
        state.bets = state.bets.filter((bet) => bet.id !== id);
        state.coefSum -= betItem.coef;
      }

      return state;
    },
    extraReducers(builder) {
      builder.addCase(placeNewBet.fulfilled, (state, action) => {
        console.log(action.payload);
        state.cart.push(action.payload);
      });
    },
  },
});

export const selectAllCart = (state) => state.cart;
export const { addToCart, clearCart, removeBet } = cartSlice.actions;

export default cartSlice.reducer;
