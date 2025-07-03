import MainLayout from "@/main/MainLayout";
import AllBooks from "@/pages/AllBooks";
import BorrowSummery from "@/pages/BorrowSummery";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
      {
        path:'/',
        Component: MainLayout,
        children:[
            {
                index:true,
                Component : AllBooks
            },
            {
                path:'/borrow-summary',
                Component:BorrowSummery
            }
        ]
      }
]);