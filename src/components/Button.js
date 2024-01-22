import React from "react";

const Button = ({ name }) => {
    return (
        <div>
            <button className="border bg-gray-300 hover:bg-gray-600 hover:text-white rounded-lg py-1 px-5 m-2">
                {name}
            </button>
        </div>
    );
};

export default Button;