import type { IBorrow } from "@/types/borrowTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type BorrowPayload = {
  bookId: string;
  data: {
    quantity: number;
    dueDate: string;
  };
};

export const borrowApi = createApi({
  reducerPath: "borrowApi",
  baseQuery: fetchBaseQuery({ baseUrl: 'https://libarary-db.vercel.app/api' }),
//    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
  tagTypes: ['Borrow'],
  endpoints: (builder) => ({
    // GET Borrow Summary
    getBorrow: builder.query<IBorrow[], void>({
      query: () => '/borrow',
      providesTags: ['Borrow'],
    }),

    // POST Borrow Book
    createBorrow: builder.mutation<IBorrow, BorrowPayload>({
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
