const CategoryMenu = () => {
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
        <button
          type="button"
          className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white"
        >
          Lunch
        </button>
        <button
          type="button"
          className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white"
        >
          Breakfast
        </button>
        <button
          type="button"
          className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white"
        >
          Dinner
        </button>
        <button
          type="button"
          className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white"
        >
          Snacks
        </button>
      </div>
    </section>
  );
};

export default CategoryMenu;
