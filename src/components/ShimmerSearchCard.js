import React from "react";

const ShimmerSearchCard = () => {
    return (
        <div className="bg-gray-100 mx-10 my-4 p-4 w-12/12 h-[220px] rounded-lg flex">
            <div className="bg-gray-300 rounded-lg w-[320px] h-[180px]"></div>
            <div>
                <div className="ml-4 w-[850px] rounded-lg h-5 bg-gray-300 "></div>
                <div className="ml-4 mt-2 w-[600px] h-5 rounded-lg bg-gray-300 "></div>
                <div className="ml-4 mt-6 w-[100px] h-3 rounded-lg bg-gray-300 "></div>
                <div className="ml-4 mt-10 w-[500px] h-3 rounded-lg bg-gray-300 "></div>
            </div>
        </div>
    );
};

export default ShimmerSearchCard;