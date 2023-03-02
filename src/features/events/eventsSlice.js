import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const EVENTS_URL = "http://localhost:3000/events";

const initialState = {
  events: [
  ],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchEvents = createAsyncThunk("posts/fetchEvents", async () => {
  const response = await axios.get(EVENTS_URL);
  return response.data;
});

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addToCart: (state) => {
      return state;
    },
    setEvents: (state, action) => {
      state.events = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchEvents.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.status = "succeeded";
        const loadedPosts = action.payload.map((post) => {
          return post;
        });

        // Add any fetched posts to the array
        state.events = state.events.concat(loadedPosts);
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllEvents = (state) => state.events.events;
export const getEventsStatus = (state) => state.events.status;
export const getEventsError = (state) => state.events.error;

export const { addToCart } = eventsSlice.actions;

export default eventsSlice.reducer;
