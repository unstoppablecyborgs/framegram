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
  }),
})
