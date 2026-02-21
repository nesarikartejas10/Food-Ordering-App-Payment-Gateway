import CategoryMenu from "../components/CategoryMenu";
import FoodItems from "../components/FoodItems";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <CategoryMenu />
      <FoodItems />
    </main>
  );
};

export default HomePage;
