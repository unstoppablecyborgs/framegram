import { baseApi } from '../api'

export type User = {
  userId: number
  userName: string
  email: string
  isBlocked: boolean
}

export const authApi = baseApi.injectEndpoints({
  endpoints: build => ({
    me: build.query<User, void>({
      query: () => 'auth/me',
    }),
    signup: build.mutation<
      void,
      { userName: string; email: string; password: string; baseUrl: string }
    >({
      query: params => ({
        body: params,
        method: 'POST',
        url: 'auth/registration',
      }),
    }),
  }),
})

export const { useMeQuery, useSignupMutation } = authApi
