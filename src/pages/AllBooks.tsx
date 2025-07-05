import { useDeleteBookMutation, useGetBooksQuery } from "@/redux/api/bookApi";
import LoaderSpinner from "@/commonComponents/LoaderSpinner";
import type { IBook } from "@/types/bookTypes";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { FcViewDetails } from "react-icons/fc";

const AllBooks = () => {
  // get all book
  const { data, isLoading } = useGetBooksQuery(undefined, {
    refetchOnFocus: true,
  });
  const [deleteBook] = useDeleteBookMutation();

  if (isLoading) {
    return <LoaderSpinner />;
  }

  // delete handler---------------------------->
  const deleteHandler = (id:string) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await deleteBook(id).unwrap();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    } catch (error) {
      toast.error("can't delete book");
    }
  };

  const books = data ?? [];



  return (
    <div className="p-4">
      <div className="py-6 flex justify-end ">
        <Link to={"/create-book"}>
          <button className="bg-blue-700 cursor-pointer text-white px-4 py-1 rounded-sm">
            Add Book
          </button>
        </Link>
      </div>
      <h2 className="text-2xl font-semibold mb-4">All Books</h2>
      <div className="border rounded-lg overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Genre</TableHead>
              <TableHead>ISBN</TableHead>
              <TableHead>Copies</TableHead>
              <TableHead>Availability</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {books.data.map((book: IBook) => (
              <TableRow key={book._id}>
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.genre}</TableCell>
                <TableCell>{book.isbn}</TableCell>
                <TableCell>{book.copies}</TableCell>
                <TableCell>
                  {book.available ? (
                    <span className="text-green-600 font-medium">
                      Available
                    </span>
                  ) : (
                    <span className="text-red-600 font-medium">
                      Unavailable
                    </span>
                  )}
                </TableCell>
                <TableCell className="flex gap-3">
                  <Link to={`/books/${book?._id}`}>
                    <button className=" cursor-pointer text-2xl">
                      <FcViewDetails />
                    </button>
                  </Link>
                  <Link to={`/edit-book/${book?._id}`}>
                    <button className="text-blue-600 cursor-pointer text-2xl">
                      <FaEdit />
                    </button>
                  </Link>
                  <button
                    onClick={() => deleteHandler(book?._id || '')}
                    className="text-red-600 cursor-pointer text-2xl"
                  >
                    <RiDeleteBin6Fill />
                  </button>
                  {
                    book?.available?<Link to={`/borrow/${book?._id}`}>
                    <button className="bg-green-700 rounded-md cursor-pointer text-white hover:underline py-1 px-2 ">
                      Borrow
                    </button>
                  </Link>:
                    <button className="bg-gray-300 rounded-md cursor-pointer hover:cursor-not-allowed py-1 px-2 ">
                      Borrow
                    </button>
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AllBooks;
