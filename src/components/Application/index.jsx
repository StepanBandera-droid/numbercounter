import Header from "../Header";
import Button from "../Button";
import CloseButton from "../CloseButton";
import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const savedCount = localStorage.getItem("clickCount");
    if (savedCount !== null) {
      setCount(Number(savedCount));
    }
  }, []);

  function handleClick() {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem("clickCount", newCount);
  }

  function deleteCount() {
    setCount(0);
    localStorage.removeItem("clickCount");
  }

  return (
    <div className="container">
      <Header />

      <div className="button-container">
        <Button onClick={handleClick}>Количество кликов: {count}</Button>
      </div>

      <div className="close-container">
        <CloseButton deleteClick={deleteCount} />
      </div>
    </div>
  );
}
