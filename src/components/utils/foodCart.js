import React, { useState } from "react";

export default function FoodCart({ value }) {
    const [text, setText] = useState("Add");

    function textModifier() {
        if (text === "Add") {
            setText("Remove");
        } else {
            setText("Add");
        }
    }

    return (
        <>
            <h2>{value.food}</h2>
            <h2>{value.price}</h2>
            <button onClick={textModifier}>{text}</button>
        </>
    );
}