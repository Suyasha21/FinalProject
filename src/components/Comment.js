import React from "react";
import CommentList from "./CommentList";

const Comment = ({ comment }) => {
    return (
        <div className="bg-gray-100 p-2 flex border-l-4 mx-4 border-black my-2">
            <img
                className="h-8"
                alt="user"
                src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png"
            />
            <div className="mx-4">
                <h2 className="font-bold">{comment.name}</h2>
                <p>{comment.text}</p>
                <CommentList comments={comment.replies} />
            </div>
        </div>
    );
};

export default Comment;