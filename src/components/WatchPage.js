import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_API_CHANNEL, YOUTUBE_VIDEO_API } from "../utils/constant";
import CommentList from "./CommentList";
import comments from "../utils/mockDataComments";
import ShimmerWatchPage from "./ShimmerWatchPage";
import LiveChat from "./LiveChat";

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const [videoData, setVideoData] = useState(null);

    const dispatch = useDispatch();
    const [channelInfo, setChannelInfo] = useState(null);

    useEffect(() => {
        dispatch(closeMenu());
        getVideoData(searchParams.get("v"));
    }, []);

    const getVideoData = async (videoId) => {
        const data = await fetch(YOUTUBE_VIDEO_API + videoId);
        const json = await data.json();

        setVideoData(json.items[0]);
        getChannelInfo(json?.items[0]?.snippet?.channelId);
    };

    const getChannelInfo = async (channelId) => {
        const data = await fetch(YOUTUBE_API_CHANNEL + channelId);
        const json = await data.json();

        setChannelInfo(json.items[0]);
    };

    const title = videoData?.snippet?.title;
    const channelTitle = videoData?.snippet?.channelTitle;
    // console.log(videoData);
    // console.log(channelInfo);

    return videoData === null ? (
        <ShimmerWatchPage />
    ) : (
        <div className="px-24 py-6 w-full">
            <div className="flex">
                <div>
                    <iframe
                        width="870"
                        height="549"
                        className="rounded-xl"
                        src={
                            "https://www.youtube.com/embed/" +
                            searchParams.get("v") +
                            "?si=Jb4TyPbW-xxmZrLS&autoplay=1"
                        }
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
                <LiveChat />
            </div>

            <div className="my-4">
                <h1 className="font-semibold text-xl">{title}</h1>
                <div className="flex">
                    <img
                        className="rounded-full w-12 h-12 ml-2 mt-4"
                        src={channelInfo?.snippet?.thumbnails?.default?.url}
                        alt="Channel-Logo"
                    />
                    <div>
                        <h2 className="font-semibold text-lg mx-4 mt-4">
                            {channelTitle}
                        </h2>
                        <h3 className="font-semibold text-sm mx-4">
                            {channelInfo?.statistics?.subscriberCount}{" "}
                            subscribers
                        </h3>
                    </div>
                </div>
                <div>
                    <h2 className="font-semibold text-lg mt-4">Comments</h2>
                    <CommentList comments={comments} />
                </div>
            </div>
        </div>
    );
};

export default WatchPage;