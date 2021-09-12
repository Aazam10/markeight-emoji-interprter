import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "😉": "winking face",
  "🤑": "money-mouth face",
  "🤐": "zipper mouth face",
  "😪": "sleepy face",
  "🤤": "drooling face",
  "🥶": "cold face"
};
var emojisWeKnow = Object.keys(emojiDictionary);
export default function App() {
  var [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (userInput === "") {
      meaning = "";
    }
    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }
  function onClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1> inside outt</h1>
      <input onChange={emojiInputHandler} />
      <div
        style={{ padding: "1rem", fontWeight: "bolder", fontSize: "1.5rem" }}
      >
        {meaning}
      </div>
      <h3>emojis we know</h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => onClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              padding: "0.5rem",
              cursor: "pointer",
              margin: "0.5rem"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
