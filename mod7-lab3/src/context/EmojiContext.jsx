import React, {useContext, useState} from "react";

const EmojiContext = React.createContext();

export const EmojiProvider = (props) => {
    const [emoji, setEmoji] = useState('😃'); // default emoji

    // sets emoji object in state, shared via context
    const handleUpdateEmoji = (emoji) => {
        setEmoji(emoji);
    }

    // switches the emoji currently in state 
    const handleSwitchEmoji = () => {
        let newEmoji = emoji === '😃' ? '😢' : '😃';
        setEmoji(newEmoji)
    }

    return (
        <EmojiContext.Provider value={{emoji, handleUpdateEmoji, handleSwitchEmoji}}>
            {props.children}
        </EmojiContext.Provider>
    ); 
}

export const useEmojiContext = () => {
    return useContext(EmojiContext);
}