import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { openMenu } from "../utils/appSlice";
import { Link, useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_VIDEOS } from "../utils/constant";
import SearchCard from "./SearchCard";
import ShimmerSearchCard from "./ShimmerSearchCard";

const SearchVideosList = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const [videos, setVideos] = useState(null);

    useEffect(() => {
        dispatch(openMenu());
        getVideos(searchParams.get("search_query"));
    }, [searchParams.get("search_query")]);

    const getVideos = async (searchQuery) => {
        const data = await fetch(YOUTUBE_SEARCH_VIDEOS + searchQuery);
        const json = await data.json();

        setVideos(json.items);
    };

    return videos == null ? (
        <div>
            <ShimmerSearchCard />
            <ShimmerSearchCard />
            <ShimmerSearchCard />
            <ShimmerSearchCard />
            <ShimmerSearchCard />
        </div>
    ) : (
        <div>
            {videos.map((video) => {
                return (
                    <Link
                        key={video.id.videoId}
                        to={"/watch?v=" + video.id.videoId}
                    >
                        <SearchCard data={video} />
                    </Link>
                );
            })}
        </div>
    );
};

export default SearchVideosList;