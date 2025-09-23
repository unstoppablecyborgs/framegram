import { PayloadAction } from '@reduxjs/toolkit'
import { createAppSlice } from '@/shared/store'
import type { User } from '../api/auth'

type AuthSliceState = {
  user: null | User
  token: string | null
  isAuthenticated: boolean
}

const initialState: AuthSliceState = {
  user: null,
  token: null,
  isAuthenticated: false,
}

// If you are not using async thunks you can use the standalone `createSlice`.
export const authSlice = createAppSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: create => ({
    tokenReceived: create.reducer((state, action: PayloadAction<string>) => {
      state.token = action.payload
    }),
    loggedOut: create.reducer(() => initialState),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectUser: auth => auth.user,
    selectToken: auth => auth.token,
    selectIsAuthenticated: auth => auth.isAuthenticated,
  },
})

// Action creators are generated for each case reducer function.
export const { tokenReceived, loggedOut } = authSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectUser, selectToken, selectIsAuthenticated } = authSlice.selectors
