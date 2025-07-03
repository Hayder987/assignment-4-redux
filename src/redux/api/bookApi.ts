
import type { IBook } from '@/types/bookTypes'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const bookApi = createApi({
     reducerPath: 'bookApi',
      baseQuery: fetchBaseQuery({ baseUrl: 'https://libarary-db.vercel.app/api' }),
      tagTypes: ['Books'],
      endpoints: (builder) => ({
      getBooks: builder.query<IBook[], void>({
      query: () => '/books',
      providesTags: ['Books'],
    }),
    
    createBook: builder.mutation<IBook, Partial<IBook>>({
      query: (book) => ({
        url: '/books',
        method: 'POST',
        body: book,
      }),
      invalidatesTags: ['Books'],
    }),

    })
})

export const {useGetBooksQuery, useCreateBookMutation} = bookApi;