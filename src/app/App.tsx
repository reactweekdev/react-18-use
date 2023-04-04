import { Suspense } from 'react'

import reactLogo from '../assets/react.svg'

import UsersPage from './pages/UsersPage'
import './App.css'

function App() {

    return (
        <div className="App">
            <div>
                <img src={reactLogo} className="logo react" alt="React logo" />
            </div>
            <Suspense fallback={<h2>Loading…</h2>}>
                <UsersPage />
            </Suspense>
            <p className="read-the-docs">
                React 18 use() hook showcase
            </p>
        </div>
    )
}

export default App
