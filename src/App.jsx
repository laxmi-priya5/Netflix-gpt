import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Browse from './Components/Browse'
import { Store } from './utils/store'
import { Provider } from 'react-redux'
function App() {


  return (
    <>
    <Provider  store={Store}>
     <Browse/>
    </Provider>
    </>
  )
}

export default App
