// import { configureStore } from '@reduxjs/toolkit';
// import AuthReducer from '../slice/AuthSlice';

// export const makeStore = () => {
//   return configureStore({
//     reducer: {
//       info: AuthReducer,
//     },
//   });
// };

// export type AppStore = ReturnType<typeof makeStore>;
// export type RootState = ReturnType<AppStore['getState']>;
// export type AppDispatch = AppStore['dispatch'];


import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from '../slice/AuthSlice'
export const makeStore = () => {
  return configureStore({
    reducer: {
      info:AuthReducer,
    },
  });
};


export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']