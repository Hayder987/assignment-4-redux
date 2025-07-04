
import LoaderSpinner from "@/commonComponents/LoaderSpinner";
import { useGetBorrowQuery } from "@/redux/api/borrowApi";
import type { IborrowItem } from "@/types/borrowItem";


const BorrowSummary = () => {
  const { data, isLoading } = useGetBorrowQuery(undefined, {
    refetchOnFocus: true,
  });

  if (isLoading) return <LoaderSpinner />;

  const borrowList:IborrowItem[] = data?.data || [];
  console.log(borrowList)

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">📚 Borrow Summary</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {borrowList.map((item:IborrowItem, index:number) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow p-4 hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-indigo-600">
              {item.book?.title || "Unknown Title"}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              ISBN: {item.book?.isbn || "N/A"}
            </p>
            <p className="mt-3 text-lg font-medium text-gray-800">
              📦 Total Borrowed: {item.totalQuantity}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BorrowSummary;
