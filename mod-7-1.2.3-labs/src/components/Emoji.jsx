import React, { useState } from "react";

const Emoji = () => {
    const [mood, setMood] = useState("happy");

    const changeMood = () => {
        setMood((mood === "happy") ? "sad" : "happy");
    };

    const emoji = (mood === "happy") ? "😃" : "😢";

    return (
        <div className="emoji-container">
            <button onClick={changeMood}>Change Mood</button>
            <div className={`emoji ${mood}`}>
                {emoji}
            </div>
        </div>
    );
};

export default Emoji;