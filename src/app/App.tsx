import { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import reactLogo from '../assets/react.svg'

import Nav from '@/components/Nav'
import UsersPage from './users/UsersPage'
import SpeakersPage from './constantineSpeakers/SpeakersPage'
import './App.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Nav />
                <Suspense fallback={<h2>Loading…</h2>}>
                    <UsersPage />
                </Suspense>
            </>
        ),
    },
    {
        path: '/constantine/speakers',
        element: (
            <>
                <Nav />
                <Suspense fallback={<h2>Loading…</h2>}>
                    <SpeakersPage />
                </Suspense>
            </>
    ),
  },
])

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