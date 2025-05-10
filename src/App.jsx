import './App.css'
import Headline from './components/Headline'
import Button from './components/Button/Button'
import CloseButton from './components/CloseButton/CloseButton'
import {useState} from 'react'

export default function App(){
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount((count)=> count + 1 )
  }

  function deleteCount(){
    setCount((count)=> 0)
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
