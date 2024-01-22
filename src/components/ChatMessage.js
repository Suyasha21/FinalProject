const ChatMessage = ({ name, message }) => {
    return (
        <div className="py-4 px-2 flex items-center shadow border">
            <img
                className="h-7"
                alt="user"
                src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png"
            />
            <div className="ml-2 px-2">
                <span className="font-bold pr-4">{name}</span>
                <span>{message}</span>
            </div>
        </div>
    );
};

export default ChatMessage;