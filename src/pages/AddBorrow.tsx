import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { useGetBookByIdQuery } from "@/redux/api/bookApi";
import LoaderSpinner from "@/commonComponents/LoaderSpinner";
import { useCreateBorrowMutation } from "@/redux/api/borrowApi";
import { useNavigate, useParams } from "react-router";


type BorrowFormData = {
  book:string,
  quantity: number;
  dueDate: string;
};

const AddBorrow = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const navigate = useNavigate();

  // Fetch book data by ID
  const { data: book, isLoading } = useGetBookByIdQuery(bookId!, {
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    skip: !bookId, 
  });

  const [borrowBook, { isLoading: isBorrowing }] = useCreateBorrowMutation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<BorrowFormData>();

  // Set default quantity to 1
  useEffect(() => {
    setValue("quantity", 1);
  }, [setValue]);

  const onSubmit = async (formData: BorrowFormData) => {
    if (!bookId || !book) return;

    const quantity = Number(formData.quantity);

    if (quantity > book.copies) {
      toast.error(`Only ${book.copies} copies are available.`);
      return;
    }

    try {
      await borrowBook({
        data: {
          book:bookId,
          quantity,
          dueDate: formData.dueDate,
        },
      }).unwrap();
      toast.success("✅ Book borrowed successfully!");
      navigate("/borrow-summary");
    } catch (error) {
      toast.error("❌ Failed to borrow the book.");
    }
  };

  if (isLoading) return <LoaderSpinner />;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded-md">
      <h2 className="text-2xl font-semibold mb-4">
        Borrow Book: <span className="text-indigo-600">{book?.title}</span>
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Quantity Field */}
        <div>
          <Label htmlFor="quantity">Quantity (Available: {book?.copies})</Label>
          <Input
            id="quantity"
            type="number"
            min={1}
            max={book?.copies}
            {...register("quantity", {
              required: "Quantity is required",
              min: { value: 1, message: "Minimum quantity is 1" },
              max: {
                value: book?.copies || Infinity,
                message: `Max allowed is ${book?.copies}`,
              },
            })}
          />
          {errors.quantity && (
            <p className="text-sm text-red-500">{errors.quantity.message}</p>
          )}
        </div>

        {/* Due Date Field */}
        <div>
          <Label htmlFor="dueDate">Due Date</Label>
          <Input
            id="dueDate"
            type="date"
            {...register("dueDate", {
              required: "Due date is required",
            })}
          />
          {errors.dueDate && (
            <p className="text-sm text-red-500">{errors.dueDate.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button type="submit" disabled={isBorrowing}>
          {isBorrowing ? "Borrowing..." : "Borrow Book"}
        </Button>
      </form>
    </div>
  );
};

export default AddBorrow;
