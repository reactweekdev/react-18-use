import React from 'react'
import './App.css'
import logo from '../assets/react.svg'
import { AppRoutes } from './AppRoutes'

function App() {
    return (
        <div className="App">
            <div>
                <img src={logo} className="logo react" alt="React logo" />
            </div>
            <AppRoutes />
            <p className="read-the-docs">React 18 use() hook showcase</p>
        </div>
    )
}

export default App
