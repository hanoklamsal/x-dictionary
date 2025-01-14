import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [definition, setDefinition] = useState("");
  const [words, setWords] = useState([
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ]);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSearch = () => {
    const result = words.find((e) => e.word.toLowerCase() === inputText.toLowerCase());
    
    if (result) {
      setDefinition(result.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <input
        onChange={handleChange}
        name="word"
        value={inputText}
        placeholder="Search for a word"
      />
      <button onClick={handleSearch}>Search</button>
      <h4>Definition:</h4>
      <p>{definition}</p>
    </div>
  );
}

export default App;
