import { useNavigate, useParams } from "react-router";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "react-toastify";
import { useGetBookByIdQuery, useUpdateBookMutation } from "@/redux/api/bookApi";
import LoaderSpinner from "@/commonComponents/LoaderSpinner";
import type { IBook } from "@/types/bookTypes";
import { useEffect } from "react";

const genreOptions = [
  "FICTION",
  "NON_FICTION",
  "SCIENCE",
  "HISTORY",
  "BIOGRAPHY",
  "FANTASY",
];


const EditBooks = () => {
  const param = useParams();
  const id : string = param.id || ''
  const { data: bookData, isLoading } = useGetBookByIdQuery(id, {
    refetchOnFocus:true,
    refetchOnMountOrArgChange:true
  });
  const [updateBook, { isLoading: isUpdating }] = useUpdateBookMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IBook>();

  // Set default values when bookData is loaded
  useEffect(() => {
    if (bookData) {
      reset({
        title: bookData.data?.title,
        author: bookData.data?.author,
        genre: bookData.data?.genre,
        isbn: bookData.data?.isbn,
        description: bookData.data?.description,
        copies: bookData.data?.copies,
        available: bookData.data?.available,
      });
    }
  }, [bookData, reset]);

  const onSubmit = async (data: IBook) => {
    try {
      const finalData = {
        ...data,
        available: data.copies > 0,
      };
      if (!id) return;
      await updateBook({ id, data: finalData }).unwrap();
      toast.success("Book updated successfully!");
      navigate('/');
    } catch (error) {
      toast.error("Failed to update book");
    }
  };

  if (isLoading) return <LoaderSpinner />;

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Edit Book</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Title */}
        <div>
          <Label htmlFor="title">Title</Label>
          <Input id="title" {...register("title", { required: "Title is required" })} />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
        </div>

        {/* Author */}
        <div>
          <Label htmlFor="author">Author</Label>
          <Input id="author" {...register("author", { required: "Author is required" })} />
          {errors.author && <p className="text-red-500 text-sm">{errors.author.message}</p>}
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
            {genreOptions.map((genre) => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>
        </div>

        {/* ISBN */}
        <div>
          <Label htmlFor="isbn">ISBN</Label>
          <Input id="isbn" {...register("isbn", { required: "ISBN is required" })} />
          {errors.isbn && <p className="text-red-500 text-sm">{errors.isbn.message}</p>}
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
          {errors.copies && <p className="text-red-500 text-sm">{errors.copies.message}</p>}
        </div>

        {/* Available Checkbox */}
        <div className="flex items-center space-x-2">
          <Checkbox id="available" {...register("available")} />
          <Label htmlFor="available">Available</Label>
        </div>

        {/* Submit Button */}
        <Button type="submit" disabled={isUpdating}>
          {isUpdating ? "Updating..." : "Update Book"}
        </Button>
      </form>
    </div>
  );
};

export default EditBooks;
