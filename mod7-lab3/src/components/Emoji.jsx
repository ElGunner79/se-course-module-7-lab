import { useEmojiContext } from "../context/EmojiContext";

function Emoji() {
    const {emoji, handleSwitchEmoji} = useEmojiContext();

    return (
        <div className="Emoji componentBox">
            <button onClick={handleSwitchEmoji}>Change Mood</button>
            {emoji}
        </div>
    )
}

export default Emoji;