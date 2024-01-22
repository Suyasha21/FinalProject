import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
    return (
        <div>
            {comments.map((comment, index) => {
                return <Comment key={index} comment={comment} />;
            })}
        </div>
    );
};

export default CommentList;