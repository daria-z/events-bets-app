import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coefSum: 0,
  possibleWin: 0,
  betAmount: 0,
  bets: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log("add");
      state.bets.push(action.payload);
      state.coefSum += action.payload.coef;

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
    setBetAmount: (state, action) => {
      state.betAmount = action.payload;

      return state;
    },
  },
});

export const selectAllCart = (state) => state.cart;
export const { setBetAmount, addToCart, removeBet } = cartSlice.actions;

export default cartSlice.reducer;
