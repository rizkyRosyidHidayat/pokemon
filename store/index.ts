import {
  Action,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import { counterReducer } from './counter';
import { pokemonReducer } from './pokemon/reducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemon: pokemonReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
 >;