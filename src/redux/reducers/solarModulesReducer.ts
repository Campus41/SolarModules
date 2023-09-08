import { createSlice, PayloadAction  } from '@reduxjs/toolkit';
import { fetchSolarModules } from '../actions/solarModulesActions';

interface ISolarModulesState {
  solarModules: Array<{ type: string; quantity: number; price: number }>;
  loading: boolean;
  error: string | null;
}

const initialState: ISolarModulesState = {
  solarModules: [],
  loading: false,
  error: null,
};

interface ISolarModule {
  type: string;
  quantity: number;
  price: number;
}

type FetchSolarModulesAction = PayloadAction<ISolarModule[]>;

const solarModulesSlice = createSlice({
  name: 'solarModules',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchSolarModules.fulfilled, (state, action: FetchSolarModulesAction) => {
        state.solarModules = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchSolarModules.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSolarModules.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      });
  },
});

export default solarModulesSlice.reducer;
