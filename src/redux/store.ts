import { configureStore } from '@reduxjs/toolkit'
import WeatherReducer from './Weatherapi/reducer'
import WeatherHourlyReducer  from './WeatherHourlyAPI/reducer'
import WeatherDayReducer from './WeattherDayapi/reducer'

const reducer = {
    WeatherReducer:WeatherReducer,
    WeatherHourly:WeatherHourlyReducer,
    WeatherDay:WeatherDayReducer
}

const initialState = {}

export const store = configureStore({
    reducer:reducer,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
