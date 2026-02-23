import FoodCard from "./FoodCard";
import FoodData from "../data/foodData";
import { useSelector } from "react-redux";

const FoodItems = () => {
  const selectedCategory = useSelector((state) => state.category.category);
  const filterFoodByCategories = FoodData.filter((food) => {
    if (selectedCategory === "All") {
      return food;
    } else {
      return selectedCategory === food.category;
    }
  });

  console.log(filterFoodByCategories);
  return (
    <section className="flex  flex-wrap gap-6 justify-center mx-6 lg:justify-start mt-10 mb-20">
      {filterFoodByCategories.map((foodItem) => {
        return <FoodCard key={foodItem.id} foodData={foodItem} />;
      })}
    </section>
  );
};

export default FoodItems;
