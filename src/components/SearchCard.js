import React from "react";

const SearchCard = ({ data }) => {
    return (
        <div className="bg-gray-100 mx-10 my-4 p-4 w-12/12 rounded-lg flex">
            <img
                alt="thumbnail"
                src={data?.snippet?.thumbnails?.medium?.url}
                className="rounded-lg"
            />
            <div className="ml-4">
                <h1 className="font-bold text-xl">{data?.snippet?.title}</h1>
                <h3 className="my-2">{data?.snippet?.channelTitle}</h3>
                <p>{data?.snippet?.description}</p>
            </div>
        </div>
    );
};

export default SearchCard;