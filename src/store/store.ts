import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { storyApi } from "../services/story-service";

const rootReducer = combineReducers({
  [storyApi.reducerPath]: storyApi.reducer,
});

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(storyApi.middleware),
  });
};

type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore["dispatch"];

export { setupStore };
export type { RootState, AppStore, AppDispatch };
