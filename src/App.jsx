import { useState } from "react";
import Color from "./components/Color";

function App() {
  let [color, setColor] = useState("white");
  return (
    <div
      className="w-screen h-screen flex justify-center items-center"
      style={{ backgroundColor: color }}
    >
      <Color onClick={setColor} />
    </div>
  );
}

export default App;
