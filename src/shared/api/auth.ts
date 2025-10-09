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
    login: build.mutation<{ accessToken: string }, { email: string; password: string }>({
      query: body => ({
        url: 'auth/login',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useLoginMutation } = authApi
