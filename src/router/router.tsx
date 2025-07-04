import MainLayout from "@/main/MainLayout";
import AddBooks from "@/pages/AddBooks";
import AddBorrow from "@/pages/AddBorrow";
import AllBooks from "@/pages/AllBooks";
import BorrowSummery from "@/pages/BorrowSummery";
import Details from "@/pages/Details";
import EditBooks from "@/pages/EditBooks";
import ErrorPage from "@/pages/ErrorPage";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
      {
        path:'/',
        Component: MainLayout,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                index:true,
                Component : AllBooks
            },
            {
                path:'/borrow-summary',
                Component:BorrowSummery
            },
            {
                path:'/create-book',
                Component:AddBooks
            },
            {
                path:'/edit-book/:id',
                Component:EditBooks
            },
            {
                path:'/books/:id',
                Component:Details
            },
             {
                path:'/borrow/:bookId',
                Component:AddBorrow
            }
        ]
      }
]);