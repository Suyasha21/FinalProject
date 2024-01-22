
import React from "react";

const ShimmerVideoCard = () => {
    return (
        <div className="p-2 m-2 w-[26rem] h-[18rem] shadow-lg rounded-lg">
            <div className="rounded-lg w-full h-40 bg-gray-300"></div>

            <div className="flex">
                <div className="rounded-full w-12 h-12 ml-2 mt-4 bg-gray-300"></div>
                <ul className="ml-2 w-4/5 m-2">
                    <li className="font-bold py-2">
                        <div className="rounded-2xl h-8 bg-gray-300"></div>
                    </li>
                    <li>
                        <div className="rounded-2xl h-4 mt-2 w-4/12 bg-gray-300"></div>
                    </li>
                    <li>
                        <div className="rounded-2xl h-4 mt-2 w-2/12 bg-gray-300"></div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ShimmerVideoCard;