import { useState } from "react";

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
    const [text,setText]=useState("Add");
    function textModifier(){
        if(text=="Add"){
            setText("Remove");
        }
        else{
            setText("Add");
        }
    }
    return (
        <>
           <div className="cards">
             {foodItems.map((value) => {
                return (
                    <div key={value.id} className="foods">
                        <h2>{value.food}</h2>
                        <h2>₹{value.price}</h2>
                        <button onClick={textModifier}>{text}</button>
                    </div>
                );
            })}
           </div>
        </>
    );
}