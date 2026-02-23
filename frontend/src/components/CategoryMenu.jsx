import foodData from "../data/foodData";

const CategoryMenu = () => {
  const uniqueCategories = [...new Set(foodData.map((item) => item.category))];

  return (
    <section className="ml-6">
      <h3 className="text-xl font-semibold">Find the best food</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button
          type="button"
          className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white"
        >
          All
        </button>

        {uniqueCategories.map((category) => {
          return (
            <button
              key={category}
              type="button"
              className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white"
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
