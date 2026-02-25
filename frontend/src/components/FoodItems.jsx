import FoodCard from "./FoodCard";
import FoodData from "../data/foodData";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { PropagateLoader } from "react-spinners";

const FoodItems = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchFood = useSelector((state) => state.search.search);
  const selectedCategory = useSelector((state) => state.category.category);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:5000/foods");
        setFoods(response.data);
      } catch (error) {
        toast.error("Error while fetching foods");
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  const filterFoodByCategories = foods.filter((food) => {
    if (selectedCategory === "All") {
      return food.name.toLowerCase().includes(searchFood.toLowerCase());
    } else {
      if (selectedCategory === food.category)
        return food.name.toLowerCase().includes(searchFood.toLowerCase());
    }
  });

  if (loading) {
    return (
      <div className="h-100 flex flex-col justify-center items-center">
        <PropagateLoader color="#4caf50" />
      </div>
    );
  }

  return (
    <section className="flex flex-wrap gap-6 justify-center mx-6 lg:justify-start mt-10 mb-20">
      {filterFoodByCategories.length === 0 && (
        <h2 className="h-[50%] flex justify-center items-center text-xl font-bold text-gray-800">
          No food available in this category
        </h2>
      )}
      {filterFoodByCategories.map((foodItem) => {
        return <FoodCard key={foodItem.id} foodData={foodItem} />;
      })}
    </section>
  );
};

export default FoodItems;
