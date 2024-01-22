import React from "react";
import ShimmerVideoCard from "./ShimmerVideoCard";

const ShimmerHome = () => {
    return (
        <div className="flex flex-wrap">
            <ShimmerVideoCard />
            <ShimmerVideoCard />
            <ShimmerVideoCard />
            <ShimmerVideoCard />
            <ShimmerVideoCard />
            <ShimmerVideoCard />
        </div>
    );
};

export default ShimmerHome;