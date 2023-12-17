import React, { useContext, useState } from "react";

const EmojiContext = React.createContext();


export const EmojiProvider = (props) => {
    const [emoji, setEmoji] = useState('😊');

    const handleUpdateEmoji = (emoji) => {
        setEmoji(emoji);
    }

    const handleSwitchEmoji = () => {
        let newEmoji = emoji === '😊' ? '😒' : '😊';
        setEmoji(newEmoji)
    }

    return (
        <EmojiContext.Provider value={{ emoji, handleUpdateEmoji, handleSwitchEmoji }}>
            {props.children}
        </EmojiContext.Provider>
    );
}

export const useEmojiContext = () => {
    return useContext(EmojiContext);
}