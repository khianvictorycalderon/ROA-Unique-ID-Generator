import { useState } from "react"
import { generateUniqueID } from "./Functions/UIDG";

interface ItemProps {
  id: string;
  name: string;
  // Add more here...
}

function App() {

  const [items, setItems] = useState<ItemProps[]>([]);
  const [input, setInput] = useState<string>("");

  const handleAddName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() == "") return; // prevent empty input
    setItems(prev => [...prev, {
      id: generateUniqueID(prev.map(task => task.id)),
      name: input
    }]);
    setInput("");
  }

  const handleRemove = (ID: string) => {
    setItems(prev => prev.filter(item => ID !== item.id));
    // All items that does not have the same ID as the argument will remain
  }

  return (
    <>
      <h1>Unique ID Generator</h1>
      <h4>No ID duplication</h4>
      <br/><br/>
      <form onSubmit={handleAddName}>
        <label>
          Enter an item name: 
          <input value={input} onChange={(e) => setInput(e.target.value)} type="text" /><br/>
          <input type="submit" value="Add"/>
        </label>
      </form>
      <br/>
      <div>
        {items.map((item, index) => (
          <div className={index % 2 == 0 ? "b1" : "b2"} key={`${item.id}${item.name}${index}`}>
            <b>ID</b>: {item.id} <br/>
            <b>Name:</b>: {item.name} <br/>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
