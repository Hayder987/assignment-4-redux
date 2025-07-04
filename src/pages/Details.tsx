import { useGetBookByIdQuery } from "@/redux/api/bookApi";
import LoaderSpinner from "@/commonComponents/LoaderSpinner";
import { useParams } from "react-router";

const Details = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetBookByIdQuery(id!, {
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    skip: !id,
  });

  const book = data?.data;

  if (isLoading) return <LoaderSpinner />;

  if (!book) {
    return (
      <div className="text-center py-10 text-red-600 text-lg">
        Book not found!
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6">{book.title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side */}
        <div className="space-y-4">
          <div>
            <p className="text-gray-700 text-sm">Author</p>
            <p className="text-lg font-semibold">{book.author}</p>
          </div>
          <div>
            <p className="text-gray-700 text-sm">Genre</p>
            <p className="text-lg">{book.genre}</p>
          </div>
          <div>
            <p className="text-gray-700 text-sm">ISBN</p>
            <p className="text-lg">{book.isbn}</p>
          </div>
          <div>
            <p className="text-gray-700 text-sm">Copies Available</p>
            <p className="text-lg font-medium">{book.copies}</p>
          </div>
          <div>
            <p className="text-gray-700 text-sm">Status</p>
            <span
              className={`text-sm font-semibold px-3 py-1 rounded-full ${
                book.available ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              }`}
            >
              {book.available ? "Available" : "Unavailable"}
            </span>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <p className="text-gray-700 text-sm mb-2">Description</p>
          <p className="text-base leading-relaxed text-gray-800">{book.description}</p>
        </div>
      </div>

      <div className="mt-8 text-sm text-gray-500">
        <p>Created: {new Date(book.createdAt).toLocaleDateString()}</p>
        <p>Last Updated: {new Date(book.updatedAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default Details;
