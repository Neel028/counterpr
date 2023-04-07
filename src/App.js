import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [state, setState] = useState(0)

  {document.title=`${state} s`}
  
  return (
    <div>
      <button onClick={()=>setState(state+1)}>click {state}</button>
    </div>
  )
}

export default App