import Header from "../Header";
import Button from "../Button";
import CloseButton from "../CloseButton";
import { useState, useEffect } from "react";
import "./styles.css";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const savedCount = localStorage.getItem("clickCount");
    if (savedCount !== null) {
      setCount(Number(savedCount));
    }
  });
  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem("clickCount", newCount);
  };

  const deleteCount = () => {
    setCount(0);
    localStorage.removeItem("clickCount");
  };

  return (
    <div className="container">
      <Header />

      <div className="button-container">
        <Button onClick={handleClick} />
        <p className="text-button">Количество кликов: {count}</p>
      </div>

      <div className="close-container">
        <CloseButton deleteClick={deleteCount} />
      </div>
    </div>
  );
};

export default App;
