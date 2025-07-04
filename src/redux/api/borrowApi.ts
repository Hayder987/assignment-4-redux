
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const borrowApi = createApi({
  reducerPath: "borrowApi",
  baseQuery: fetchBaseQuery({ baseUrl: 'https://libarary-db.vercel.app/api' }),
  tagTypes: ['Borrow'],
  endpoints: (builder) => ({
    // GET Borrow Summary
    getBorrow: builder.query({
      query: () => '/borrow',
      providesTags: ['Borrow'],
    }),

    // POST Borrow Book
    createBorrow: builder.mutation({
      query: ({ data }) => ({
        url: `/borrow`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Borrow'],
    }),
  }),
});

export const { useGetBorrowQuery,useCreateBorrowMutation } = borrowApi;
