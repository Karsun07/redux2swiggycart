import React, { useState } from "react";
import { addItems,removeItems } from "../slice1";
import { useDispatch } from "react-redux";
export default function FoodCart({ value }) {
    const [text, setText] = useState("Add");
    const dispatch=useDispatch();

    function textModifier() {
        if (text === "Add") {
            dispatch(addItems());
            setText("Remove");
        } else {
            dispatch(removeItems());
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