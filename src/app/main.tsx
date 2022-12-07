import React, { Suspense, SuspenseList } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import '@/styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <SuspenseList>
            <Suspense fallback={<h2>Loading…</h2>}>
                <App />
            </Suspense>
            <Suspense fallback={<h2>Loading…</h2>}>
                <App />
            </Suspense>
            <Suspense fallback={<h2>Loading…</h2>}>
                <App />
            </Suspense>
        </SuspenseList>
    </React.StrictMode>
)
