import { createContext, useState } from "react";
import AgeComponent from "./Components/AgeComponent";
import ColorComponent from "./Components/ColorComponent";
import CounterComponent from "./Components/CounterComponent";
import GenderComponent from "./Components/GenderComponent";

export const noteContext = createContext();

function App() {
  const [value, setValue] = useState([]);
  return (
    <div>
      <noteContext.Provider value={{ value, setValue }}>
        <CounterComponent />
        <AgeComponent />
        <ColorComponent />
        <GenderComponent />
      </noteContext.Provider>
    </div>
  );
}

export default App;
