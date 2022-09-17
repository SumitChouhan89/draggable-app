import "./App.css";
import { useState } from "react";
import Box from "./components/Box";

const ITEMS = 3;

function App() {
  const [position, setPosition] = useState(0);
  return (
    <div>
      {Array(ITEMS)
        .fill(null)
        .map((_, index) => {
          return (
            <Box
              key={index}
              hasItem={index === position}
              onSelect={() => setPosition(index)}
            />
          );
        })}
    </div>
  );
}

export default App;
