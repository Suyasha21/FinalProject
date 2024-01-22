import React, { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import ShimmerHome from "./ShimmerHome";

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_API_URL);
        const json = await data.json();

        if (json?.items == null) {
            return;
        }
        setVideos(json?.items);
    };

    return videos.length === 0 ? (
        <ShimmerHome />
    ) : (
        <div className="flex flex-wrap">
            {videos.map((video) => (
                <Link key={video.id} to={"/watch?v=" + video.id}>
                    <VideoCard info={video} />
                </Link>
            ))}
        </div>
    );
};

export default VideoContainer;