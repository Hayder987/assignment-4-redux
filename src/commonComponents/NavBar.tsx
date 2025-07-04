import { NavLink } from "react-router"


const NavBar = () => {
  return (
    <nav className="flex justify-between items-center bg-blue-200 py-6 px-3">
        <div className="">
            <p className="text-base font-semibold md:text-3xl">📚 Library</p>
        </div>
        {/* nav menu */}
        <div className="">
            <ul className="flex justify-center items-center text-sm md:text-base gap-6">
                <NavLink to='/'><li className="">All Books</li></NavLink>
                <NavLink to='/borrow-summary'><li className="">Borrow Summary</li></NavLink>
                <NavLink to='/create-book'><li className="">Add Books</li></NavLink>
            </ul>
        </div>
        {/* login */}
        <div className="">

        </div>
    </nav>
  )
}

export default NavBar