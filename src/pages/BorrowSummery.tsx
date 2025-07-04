import { useGetBorrowQuery } from "@/redux/api/borrowApi"


const BorrowSummery = () => {
  const {data, isLoading} = useGetBorrowQuery(undefined)

  console.log(data)

  return (
    <div>

    </div>
  )
}

export default BorrowSummery