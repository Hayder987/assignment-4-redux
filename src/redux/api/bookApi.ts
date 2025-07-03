
import type { IBook } from '@/types/bookTypes'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const bookApi = createApi({
     reducerPath: 'bookApi',
      baseQuery: fetchBaseQuery({ baseUrl: 'https://your-api-url.com/api/' }),
      tagTypes: ['Books'],
      endpoints: (builder) => ({
      getBooks: builder.query<IBook[], void>({
      query: () => 'books',
      providesTags: ['Books'],
    }),

    })
})

export const {useGetBooksQuery} = bookApi;