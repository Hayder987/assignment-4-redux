import { useParams } from "react-router"


const EditBooks = () => {

    const {id} = useParams();
    console.log(id)

  return (
    <div>EditBooks</div>
  )
}

export default EditBooks