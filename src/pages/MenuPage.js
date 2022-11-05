import { useState, useEffect } from "react";
import FoodItem from "../components/FoodItem";
import { db, collection, getDocs } from "../firebase/index";
import "./MenuPage.css";
import menu from "../assets/menu.png";

export default function MenuPage() {
  const [foodMenu, setFoodMenu] = useState([]);

  // get food menu
  const getMenu = async () => {
    const querySnapshot = await getDocs(collection(db, "brijenma@gmail.com"));
    setFoodMenu(
      querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
    console.log(foodMenu);
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <div className="main-container">
      {/* heading */}
      <div className="header">
        <img src={menu} alt="Menu" className="menu-image" />
        <span className="total-dishes">({foodMenu.length})</span>
      </div>
      {/* menu */}
      <div className="menu-container">
        {foodMenu.length > 0 ? (
          foodMenu.map((item, index) => (
            <FoodItem
              key={index}
              dishName={item.dishName}
              currency={item.currency}
              price={item.price}
            />
          ))
        ) : (
          <span className="loading-text">loading your menu....</span>
        )}
      </div>
    </div>
  );
}
