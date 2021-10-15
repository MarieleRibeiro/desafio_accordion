import Accordion from "./pages/Accordion";
import { options } from "../src/components/Options";

function App() {
  return (
    <div className="app">
      {options.map((option) => (
        <Accordion header={option.header} body={option.body} />
      ))}
    </div>
  );
}

export default App;
