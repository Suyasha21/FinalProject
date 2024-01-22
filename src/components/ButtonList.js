import React from "react";
import Button from "./Button";

const ButtonList = () => {
    const buttonList = [
        "All",
        "Gaming",
        "Music",
        "Mixes",
        "Editing",
        "Coding",
        "Laptops",
        "Lo-fi Music",
        "Cooking",
        "Live",
        "Engineering",
        "Cricket",
    ];

    return (
        <div className="flex">
            {buttonList.map((items, index) => (
                <Button key={index} name={items} />
            ))}
        </div>
    );
};

export default ButtonList;