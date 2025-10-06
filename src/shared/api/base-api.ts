import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {API_URL} from "@/src/shared/model/constats";

export interface BaseResponse<T = unknown> {
    data: T
    message?: string
    success: boolean
}

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
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
