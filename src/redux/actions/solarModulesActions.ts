import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

export const fetchSolarModules = createAsyncThunk('data/fetchData', async () => {
  try {
    const response = await fetch('https://testtask.twnty.de');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const res = await response.json();

    const data = Object.entries(res).map((data: any) => {
      return {
        'type': data[0],
        'quantity': data[1].quantity,
        'price': data[1].price
      }
    })

    return data;
  } catch (error) {
    throw error;
  }
});

export const fetchDataFulfilled = createAction<ReturnType<typeof fetchSolarModules.fulfilled>>('data/fetchDataFulfilled');
