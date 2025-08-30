import { useState } from 'react'
import './App.css'
import LiveTextPreview from './components/LiveTextPreview'
import Counter from './components/Counter'

function App() {
  return (
    <>
      <Counter />
      <hr/>
      <LiveTextPreview />
    </>
  )
}

export default App
