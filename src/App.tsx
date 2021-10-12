import Accordion from "./pages/Accordion";
import { options } from "../src/components/Options";

function App() {
  return (
    <div className="app">
      {options.map((option) => (
        <Accordion thinker={option.thinker} phrase={option.phrase} />
      ))}
    </div>
  );
}

export default App;
