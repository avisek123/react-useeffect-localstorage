import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [fruit, setFruit] = useState();
  const appleClick = () => {
    setFruit("apple");
  };
  const bananaClick = () => {
    setFruit("banana");
  };
  useEffect(() => {
    const myFruit = JSON.parse(localStorage.getItem("myFruit"));
    if (myFruit) setFruit(myFruit);
  }, []);

  useEffect(() => {
    localStorage.setItem("myFruit", JSON.stringify(fruit));
  }, [fruit]);
  return (
    <div className="App">
      <h1>I Love to eat {fruit}</h1>
      <button onClick={appleClick}>Apple</button>
      <br />
      <br />
      <button onClick={bananaClick}>banana</button>
    </div>
  );
}
