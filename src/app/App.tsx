import { RouterProvider } from 'react-router-dom'
import { router } from './router/Router'

import reactLogo from '../assets/react.svg'

import './App.css'

function App() {

    return (
        <div className="App">
            <div>
                <img src={reactLogo} className="logo react" alt="React logo" />
            </div>
            <RouterProvider router={router} />
            <p className="read-the-docs">
                React 18 use() hook showcase
            </p>
        </div>
    )
}

export default App
