import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import Nav from '@/components/Nav'

function Root() {
    return (
        <>
            <Nav />
            <Suspense fallback={<h2>Loading…</h2>}>
                <Outlet />
            </Suspense>
        </>
    )
}

export default Root
