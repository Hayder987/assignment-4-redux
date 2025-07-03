import { useGetBooksQuery } from "@/redux/api/bookApi";
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

const AllBooks = () => {
  const { data, isLoading } = useGetBooksQuery(undefined,{
    refetchOnFocus:true
  });

  if (isLoading) {
    return <LoaderSpinner />;
  }

  const books: IBook[] = data?.data ?? [];

  return (
    <div className="p-4">
      <div className="py-6 flex justify-end ">
        <button className="bg-blue-700 cursor-pointer text-white px-4 py-1 rounded-sm">Add Book</button>
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
            {books.map((book) => (
              <TableRow key={book._id}>
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.genre}</TableCell>
                <TableCell>{book.isbn}</TableCell>
                <TableCell>{book.copies}</TableCell>
                <TableCell>
                  {book.available ? (
                    <span className="text-green-600 font-medium">Available</span>
                  ) : (
                    <span className="text-red-600 font-medium">Unavailable</span>
                  )}
                </TableCell>
                <TableCell className="flex gap-3">
                  <button className="text-blue-600 cursor-pointer text-2xl"><FaEdit /></button>
                  <button className="text-red-600 cursor-pointer text-2xl"><RiDeleteBin6Fill /></button>
                  <button className="bg-green-700 rounded-md cursor-pointer text-white hover:underline py-1 px-2 ">Borrow</button>
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
