import { useState } from 'react'
import './App.css'

import Headline from './components/Headline'
import Button from './components/Button'
import CloseButton from './components/CloseButton'

export default function App(){
  return(
    <div>
      <Headline/>
      
      <div>
        <Button />
      </div>

      <div>
        <CloseButton/>
      </div>
    </div>
  )
}