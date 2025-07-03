import MainLayout from "@/main/MainLayout";
import AddBooks from "@/pages/AddBooks";
import AllBooks from "@/pages/AllBooks";
import BorrowSummery from "@/pages/BorrowSummery";
import EditBooks from "@/pages/EditBooks";
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
            },
            {
                path:'/create-book',
                Component:AddBooks
            },
            {
                path:'/edit-book/:id',
                Component:EditBooks
            }
        ]
      }
]);