import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    return (
        isMenuOpen && (
            <div className="p-5 pr-16 w-48 shadow-lg">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>Shorts</li>
                    <li>Subscription</li>
                </ul>

                <h1 className="font-bold pt-5">You</h1>
                <ul>
                    <li>Your Channel</li>
                    <li>History</li>
                    <li>Your Videos</li>
                    <li>Watch Later</li>
                </ul>

                <h1 className="font-bold pt-5">Subscription</h1>
                <ul>
                    <li>Channel 1</li>
                    <li>Channel 2</li>
                    <li>Channel 3</li>
                    <li>Channel 4</li>
                </ul>

                <h1 className="font-bold pt-5">Explore</h1>
                <ul>
                    <li>Trending</li>
                    <li>Shopping</li>
                    <li>Music</li>
                    <li>Film</li>
                    <li>Live</li>
                    <li>Sports</li>
                </ul>
            </div>
        )
    );
};

export default Sidebar;