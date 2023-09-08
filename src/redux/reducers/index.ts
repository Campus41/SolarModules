import { combineReducers } from '@reduxjs/toolkit';
import solarDataReducer from './solarModulesReducer';
import solarModulesSelected from './solarModulesSelectedReducer'

const rootReducer = combineReducers({
  solarModules: solarDataReducer,
  solarModulesSelected: solarModulesSelected,
});

export default rootReducer;
