import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import solarModulesReducer from './reducers/solarModulesReducer';
import solarModulesSelectedReducer from './reducers/solarModulesSelectedReducer';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  solarModules: solarModulesReducer,
  solarModulesSelected: solarModulesSelectedReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
