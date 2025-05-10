import './App.css'
import Headline from './components/Headline'
import Button from './components/Button/Button'
import CloseButton from './components/CloseButton/CloseButton'
import {useState, useEffect} from 'react'

export default function App(){
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const savedCount = localStorage.getItem('clickCount'); // Получаем сохраненное значение
    if (savedCount !== null) {
        setCount(Number(savedCount)); // Устанавливаем его в состояние, если оно существует
    }
},);
 
  function handleClick(){
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem('clickCount', newCount);
  }

  function deleteCount(){
    setCount(0);
    localStorage.removeItem('clickCount');
  }

  return(
    <div className="container">
      <Headline/>

      <div className="buttonContainer">
        <Button onClick={handleClick}>Количество кликов: {count}</Button> 
      </div>

      <div className="closeContainer">
        <CloseButton deleteClick={deleteCount}>Обнулить счетчик кликов</CloseButton>
      </div>
    </div>
  )
}
