import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sVal: 0,
    tVal: 0,
};

export const rangeSlice = createSlice({
    name: 'sVal',
    name: 'tVal',
    initialState,
    reducers: {
        onRangeStorage: (state, action) => {
            state.sVal = Number(action.payload);
        },
        onRangeTransfer: (state, action) => {
            state.tVal = Number(action.payload);
        },
    },
});

export const { onRangeStorage, onRangeTransfer } = rangeSlice.actions;

export default rangeSlice.reducer;
