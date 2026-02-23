import { useDispatch } from "react-redux";
import { setSearch } from "../features/search/searchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row lg:items-center justify-between py-3 mx-6 mb-10">
      <div className="sm:mb-4">
        <h3 className="text-xl font-bold text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold text-green-500">CrispyConer</h1>
      </div>
      <div>
        <input
          className="p-3 border border-gray-400 bg-white text-sm outline-none rounded-lg w-full lg:w-[25vw]"
          type="search"
          name="search"
          placeholder="Search food"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
      </div>
    </nav>
  );
};

export default Navbar;
