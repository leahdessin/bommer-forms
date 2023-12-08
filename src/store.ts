import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import formDataReducer from './formDataSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        formData: formDataReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
