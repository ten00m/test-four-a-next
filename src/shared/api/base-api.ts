import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface BaseResponse<T = unknown> {
    data: T
    message?: string
    success: boolean
}

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token')
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    endpoints: () => ({}),
})

export const {
    reducer: baseApiReducer,
    middleware: baseApiMiddleware
} = baseApi
