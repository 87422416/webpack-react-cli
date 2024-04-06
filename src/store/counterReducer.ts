import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { num: 0 },
  reducers: {
    add(state) {
      state.num += 1;
    },
    sub(state) {
      state.num -= 1;
    },
    change(state, action) {
      state.num = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(asyncAdd.fulfilled, (state, action) => {
        state.num = action.payload;
      })
      .addCase(asyncSub.fulfilled, (state, action) => {
        state.num = action.payload;
      });
  },
});

export const asyncAdd = createAsyncThunk(
  "counter/asyncAdd",
  async (payload, { getState }) => {
    await new Promise((res, rej) => {
      setTimeout(() => {
        res("");
      }, 1500);
    });
    const state = getState() as any;
    return state.counter.num + 1;
  }
);

export const asyncSub = createAsyncThunk(
  "counter/asyncSub",
  async (payload, { getState }) => {
    await new Promise((res, rej) => {
      setTimeout(() => {
        res("");
      }, 1500);
    });
    const state = getState() as any;
    return state.counter.num - 1;
  }
);

export const { add, sub, change } = counterSlice.actions;

export const selectNum = (state: any) => {
  return state.counter.num;
};

export default counterSlice.reducer;
