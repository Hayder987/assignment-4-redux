import LoaderSpinner from "@/commonComponents/LoaderSpinner";
import { useGetBorrowQuery } from "@/redux/api/borrowApi";
import type { IborrowItem } from "@/types/borrowItem";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const BorrowSummary = () => {
  const { data, isLoading } = useGetBorrowQuery(undefined, {
    refetchOnFocus: true,
  });

  if (isLoading) return <LoaderSpinner />;

  const borrowList: IborrowItem[] = data?.data || [];

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">📚 Borrow Summary</h2>

      <div className="border rounded-lg shadow overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">#</TableHead>
              <TableHead>Book Title</TableHead>
              <TableHead>ISBN</TableHead>
              <TableHead className="text-right">Total Borrowed</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {borrowList.map((item: IborrowItem, index: number) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.book?.title || "Unknown Title"}</TableCell>
                <TableCell>{item.book?.isbn || "N/A"}</TableCell>
                <TableCell className="text-right font-semibold">
                  {item.totalQuantity}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BorrowSummary;
