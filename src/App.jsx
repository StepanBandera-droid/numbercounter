import './App.css'

import Headline from './components/Headline'
import Button from './components/Button/Button'
import CloseButton from './components/CloseButton/CloseButton'

export default function App(){
  return(
    <div id="container">
      <Headline/>

      <div id="button">
        <Button />
      </div>

      <div id="delete-button">
        <CloseButton/>
      </div>
    </div>
  )
}


