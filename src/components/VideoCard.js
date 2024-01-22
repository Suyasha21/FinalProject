import React, { useEffect, useState } from "react";
import { YOUTUBE_API_CHANNEL } from "../utils/constant";

const VideoCard = ({ info }) => {
    const { snippet, statistics } = info;
    const { channelId, channelTitle, title, thumbnails } = snippet;

    const [channelInfo, setChannelInfo] = useState([]);

    useEffect(() => {
        getChannelInfo(channelId);
    }, [channelId]);

    const getChannelInfo = async (channelId) => {
        const data = await fetch(YOUTUBE_API_CHANNEL + channelId);
        const json = await data.json();

        setChannelInfo(json.items[0]);
    };

    return (
        <div className="p-2 m-2 w-[26rem] h-[25rem] shadow-lg rounded-lg">
            <img
                className="rounded-lg w-full"
                src={thumbnails?.maxres?.url || thumbnails?.medium?.url}
                alt="thumbnail"
            />
            <div className="flex">
                <img
                    className="rounded-full w-12 h-12 ml-2 mt-4"
                    src={channelInfo?.snippet?.thumbnails?.default?.url}
                    alt="Channel-Logo"
                />
                <ul className="ml-2">
                    <li className="font-bold py-2">{title}</li>
                    <li>{channelTitle}</li>
                    <li>{statistics?.viewCount} views</li>
                </ul>
            </div>
        </div>
    );
};

export default VideoCard;