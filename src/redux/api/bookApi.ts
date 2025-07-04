
import type { IBook } from '@/types/bookTypes'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const bookApi = createApi({
     reducerPath: 'bookApi',
      baseQuery: fetchBaseQuery({ baseUrl: 'https://libarary-db.vercel.app/api' }),
      tagTypes: ['Books'],
      endpoints: (builder) => ({
      getBooks: builder.query({
      query: () => '/books',
      providesTags: ['Books'],
    }),
     
    // post new book
    createBook: builder.mutation<IBook, Partial<IBook>>({
      query: (book) => ({
        url: '/books',
        method: 'POST',
        body: book,
      }),
      invalidatesTags: ['Books'],
    }),

     getBookById: builder.query<IBook, string>({
      query: (id) => `books/${id}`,
    }),
    
    // update book by id
    updateBook: builder.mutation<void, { id: string; data: Partial<IBook> }>({
      query: ({ id, data }) => ({
        url: `books/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Books'],
    }),
    
    // delete book by id
    deleteBook: builder.mutation<void, string>({
      query: (id) => ({
        url: `books/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Books'],
    }),

    })
})

export const {
  useGetBooksQuery,
  useGetBookByIdQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = bookApi;