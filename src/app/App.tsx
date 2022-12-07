import Title from '@/components/Title'
import { useState, use } from 'react'
import reactLogo from '../assets/react.svg'
import './App.css'

const fetchUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())
}

const fetchPosts = (userId: any) => {
    return fetch('https://jsonplaceholder.typicode.com/posts?userId' + userId).then(
        (res) => res.json()
    )
}

function App() {
    const users = use(fetchUsers())

    if (true) {
        const posts = use(fetchPosts(users[0].id))
        console.log('posts', posts)
    }

    console.log('user', users)

    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <Title>Vite + React</Title>
            <div className="card">
                {users.map((user: any) => (
                    <p>{user.name}</p>
                ))}
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    )
}

export default App
