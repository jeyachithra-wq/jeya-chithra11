import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Typography } from '@mui/material'
import CounterApp from './counterapp'
import Stopwatch from './stopwatch'
import TodoApp from './to-do list'
import SignupPage from './signup'
import { Login } from '@mui/icons-material'
import UserReviews from './usersreview'
import Productlisting from './prod'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <Box>

    <Productlisting />
    </Box>
    </>
  )

}

export default App
