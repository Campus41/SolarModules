import { createSlice } from '@reduxjs/toolkit';

interface SolarModulesSelectedState {
  solarModulesSelected: Array<{ type: string; quantity: number; price: number, quantitySelected: number }>;
}

const initialState: SolarModulesSelectedState = {
  solarModulesSelected: [],
};

const solarModulesSelectedSlice = createSlice({
  name: 'solarModulesSelected',
  initialState,
  reducers: {
    addSolarModule: (state, action) => {
      const existingModuleIndex = state.solarModulesSelected.findIndex(
        (module) => module.type === action.payload.type
      );

      if (existingModuleIndex === -1) {
        state.solarModulesSelected.push({
          type: action.payload.type,
          quantity: action.payload.quantity,
          quantitySelected: 1,
          price: action.payload.price,
        });
      } else if(action.payload.quantity > state.solarModulesSelected[existingModuleIndex].quantitySelected){
        state.solarModulesSelected[existingModuleIndex].quantitySelected += 1;
      }
    },
    removeSolarModule: (state, action) => {
      const existingModuleIndex = state.solarModulesSelected.findIndex(
        (module) => module.type === action.payload.type
      );
      if(state.solarModulesSelected[existingModuleIndex].quantitySelected === 1) {
        state.solarModulesSelected.splice(existingModuleIndex, 1)
      } else {
        state.solarModulesSelected[existingModuleIndex].quantitySelected -= 1;
      }
        
    },
  },
});

export const { addSolarModule, removeSolarModule } = solarModulesSelectedSlice.actions;
export default solarModulesSelectedSlice.reducer;
