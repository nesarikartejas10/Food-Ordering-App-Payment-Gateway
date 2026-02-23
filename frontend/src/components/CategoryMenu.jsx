import { useEffect, useState } from "react";
import foodData from "../data/foodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../features/category/categorySlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const uniqueCategories = [
      ...new Set(foodData.map((item) => item.category)),
    ];
    setCategories(uniqueCategories);
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <section className="ml-6">
      <h3 className="text-xl font-semibold">Find the best food</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button
          onClick={() => dispatch(setCategory("All"))}
          type="button"
          className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectedCategory === "All" && "bg-green-500 text-white"}`}
        >
          All
        </button>

        {categories.map((category) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={category}
              type="button"
              className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectedCategory === category && "bg-green-500 text-white"}`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryMenu;
