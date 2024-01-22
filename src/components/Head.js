import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";
import { Link, useNavigate } from "react-router-dom";

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchCache = useSelector((store) => store.search);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const inputRef = useRef(null);

    useEffect(() => {
        // console.log(searchQuery);

        // API Call on every key press.
        // Decline it if difference between 2 key press <200ms
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery]);
            } else {
                getSearchSuggestions();
            }
        }, 200);

        return () => {
            clearTimeout(timer);
        };
    }, [searchQuery,navigate]);

    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();

        setSuggestions(json[1]);
        dispatch(cacheResults({ [searchQuery]: json[1] }));
    };

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    const handleSearchClick = (search) => {
        if (search === "") {
            return;
        } else {
            navigate("/results?search_query=" + search);
        }
    };

    return (
        <div className="grid grid-flow-col p-4 shadow-lg">
            <div className="flex col-span-1">
                <img
                    className="h-8 cursor-pointer hover:shadow-inner"
                    alt="menu"
                    src="https://www.svgrepo.com/show/313139/hamburger-menu.svg"
                    onClick={() => toggleMenuHandler()}
                />
                <a href="/">
                    <img
                        className="h-8 mx-4"
                        alt="youtube-logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
                    />
                </a>
            </div>
            <div className="col-span-10 ml-44">
                <div className="flex">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-1/2 px-4 p-2 border border-gray-400 rounded-l-full"
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() =>
                            setTimeout(() => {
                                setShowSuggestions(false);
                            }, 200)
                        }
                        ref={inputRef}
                    />

                    <button
                        className="border border-gray-400 px-4 py-2 rounded-r-full bg-gray-200 hover:bg-gray-300"
                        onClick={() => handleSearchClick(searchQuery)}
                    >
                        <img
                            alt="Search"
                            className="h-6"
                            src="https://www.svgrepo.com/show/114667/search.svg"
                        />
                    </button>
                </div>

                {showSuggestions && suggestions.length > 0 && (
                    <div className="absolute bg-white py-2 w-[31rem] mt-2 rounded-lg shadow-md border border-gray-100">
                        <ul>
                            {suggestions.map((suggestion, index) => {
                                return (
                                    <Link
                                        to={
                                            "/results?search_query=" +
                                            suggestion
                                        }
                                        key={index}
                                    >
                                        <li
                                            className="py-2 px-5 flex shadow-sm hover:bg-gray-100"
                                            onClick={() => {
                                                inputRef.current.value =
                                                    suggestion;

                                                setSearchQuery(suggestion);
                                            }}
                                        >
                                            <img
                                                alt="Search"
                                                className="h-5 mr-2"
                                                src="https://www.svgrepo.com/show/114667/search.svg"
                                            />

                                            {suggestion}
                                        </li>
                                    </Link>
                                );
                            })}
                        </ul>
                    </div>
                )}
            </div>

            <div className="col-span-1">
                <img
                    className="h-8"
                    alt="user"
                    src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png"
                />
            </div>
        </div>
    );
};

export default Head;