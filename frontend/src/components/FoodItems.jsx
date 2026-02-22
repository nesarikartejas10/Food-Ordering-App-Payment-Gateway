import FoodCard from "./FoodCard";
import FoodData from "../data/foodData";

const FoodItems = () => {
  return (
    <section className="flex  flex-wrap gap-6 justify-center mx-6 lg:justify-start mt-10 mb-20">
      {FoodData.map((foodItem) => {
        return <FoodCard key={foodItem.id} foodData={foodItem} />;
      })}
    </section>
  );
};

export default FoodItems;
