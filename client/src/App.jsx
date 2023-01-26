import { Card } from "./components/Card/Card.jsx";
import item from "../itemExample.json";

function App() {
  return (
    <div className="App">
      <h1>Too Good To Go Notifier</h1>
      <div className={"wrapper"}>
        <Card item={item} />
        <Card item={item} />
        <Card item={item} />
        <Card item={item} />
      </div>
    </div>
  );
}

export default App;
