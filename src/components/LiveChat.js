import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, emptyMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomText } from "../utils/helper";

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);

    useEffect(() => {
        const i = setInterval(() => {
            //API Polling

            dispatch(
                addMessage({
                    name: generateRandomName(),
                    message: generateRandomText(1, 1),
                })
            );
        }, 1500);

        return () => {
            clearInterval(i);
            dispatch(emptyMessage());
        };
    }, []);

    return (
        <div className=" ml-2  border border-black h-[549px] w-full rounded-xl">
            <div className="bg-slate-100 h-[91%] border border-black rounded-xl overflow-y-auto flex flex-col-reverse">
                {
                    // Don't Use Indexes as Key
                    chatMessages.map((c, index) => {
                        return (
                            <ChatMessage
                                key={index}
                                name={c.name}
                                message={c.message}
                            />
                        );
                    })
                }
            </div>
            <div className="border w-full">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        if (liveMessage === "") {
                            return;
                        }

                        dispatch(
                            addMessage({
                                name: "You",
                                message: liveMessage,
                            })
                        );

                        setLiveMessage("");
                        document.getElementById("comment").value = "";
                    }}
                >
                    <input
                        type="text"
                        placeholder="Add a Comment"
                        id="comment"
                        className="w-45 border border-black my-2 ml-4 rounded-l-md px-2 shadow"
                        onChange={(e) => setLiveMessage(e.target.value)}
                    />
                    <button className="my-2 border border-black px-2 shadow bg-green-400 rounded-r-md hover:bg-green-500">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LiveChat;