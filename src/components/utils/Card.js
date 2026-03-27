import React,{ useState } from "react";
import FoodCart from "./foodCart";

const foodItems = [
    { id: 1, food: "Pizza", price: 300 },
    { id: 2, food: "Momos", price: 400 },
    { id: 3, food: "Pasta", price: 350 },
    { id: 4, food: "Chicken", price: 390 },
    { id: 5, food: "Eggs", price: 700 },
    { id: 6, food: "Salad", price: 800 },
    { id: 7, food: "Fruits", price: 700 },
    { id: 8, food: "Burger", price: 330 },
    { id: 9, food: "Biryani", price: 450 },
    { id: 10, food: "Khichdi", price: 890 }
];
export default function Card() {
   
    return (
        <>
           <div className="cards">
             {foodItems.map((value) => {
                return (
                    <div key={value.id}>
                        <FoodCart value={value}/>
                    </div>
                );
            })}
           </div>
        </>
    );
}