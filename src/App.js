import "./App.css";
import AllUsers from "./Components/AllUsers/AllUsers";
import Counter from "./Components/Counter/Counter";
import Gamers from "./Components/Gamers/Gamers";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Counter></Counter>
      <Gamers></Gamers>
      <AllUsers></AllUsers>
    </div>
  );
}

export default App;
