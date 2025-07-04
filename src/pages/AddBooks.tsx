import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

import { toast } from "react-toastify";
import type { IBook } from "@/types/bookTypes";
import { useCreateBookMutation } from "@/redux/api/bookApi";
import { useNavigate } from "react-router";

const AddBooks = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IBook>({
    defaultValues: {
      available: true,
    },
  });

  const [addBook, { isLoading }] = useCreateBookMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const finalData = {
        ...data,
        available: data.copies > 0 ? data.available : false,
      };

      await addBook(finalData).unwrap();
      toast.success("Book added successfully!");
      reset();
      navigate('/');
    } catch (error) {
      toast.error("Failed to add book");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Add New Book</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Title */}
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* Author */}
        <div>
          <Label htmlFor="author">Author</Label>
          <Input
            id="author"
            {...register("author", { required: "Author is required" })}
          />
          {errors.author && (
            <p className="text-red-500 text-sm">{errors.author.message}</p>
          )}
        </div>
        {/* Genre */}
        <div>
          <Label htmlFor="genre">Genre</Label>
          <select
            id="genre"
            {...register("genre", { required: "Genre is required" })}
            className="w-full border border-input bg-background px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Select Genre</option>
            <option value="FICTION">Fiction</option>
            <option value="NON_FICTION">Non-Fiction</option>
            <option value="SCIENCE">Science</option>
            <option value="HISTORY">History</option>
            <option value="BIOGRAPHY">Biography</option>
            <option value="FANTASY">Fantasy</option>
          </select>
          {errors.genre && (
            <p className="text-red-500 text-sm">{errors.genre.message}</p>
          )}
        </div>

        {/* ISBN */}
        <div>
          <Label htmlFor="isbn">ISBN</Label>
          <Input
            id="isbn"
            {...register("isbn", { required: "ISBN is required" })}
          />
          {errors.isbn && (
            <p className="text-red-500 text-sm">{errors.isbn.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" {...register("description")} />
        </div>

        {/* Copies */}
        <div>
          <Label htmlFor="copies">Copies</Label>
          <Input
            id="copies"
            type="number"
            {...register("copies", {
              required: "Copies is required",
              min: { value: 0, message: "Copies must be at least 0" },
            })}
          />
          {errors.copies && (
            <p className="text-red-500 text-sm">{errors.copies.message}</p>
          )}
        </div>

        {/* Available Checkbox */}
        <div className="flex items-center space-x-2">
          <Checkbox id="available" defaultChecked {...register("available")} />
          <Label htmlFor="available">Available</Label>
        </div>

        {/* Submit Button */}
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Adding..." : "Add Book"}
        </Button>
      </form>
    </div>
  );
};

export default AddBooks;
