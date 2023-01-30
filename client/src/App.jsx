import { Card } from "./components/Card/Card.jsx";
import { items } from "../items.json";

function App() {
  return (
    <div className="App">
      <h1>Too Good To Go Notifier</h1>
      <div className={"wrapper"}>
        {items.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
