import type { IBorrow } from "@/types/borrowTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const borrowApi = createApi({
    reducerPath:"borrowApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://libarary-db.vercel.app/api' }),
    tagTypes: ['Borrow'],
    endpoints: (builder)=>({
     getBorrow: builder.query<IBorrow[], void>({
     query: () => '/borrow',
      providesTags: ['Borrow'],
     }),



    })
});

export const {useGetBorrowQuery} = borrowApi;