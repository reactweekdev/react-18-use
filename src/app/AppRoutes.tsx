import React, { Suspense } from 'react'
import { Blocks } from 'react-loader-spinner'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes'
import { SpeakersPage } from './SpeakersPage'
import UsersPage from './users/UsersPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: (
                    <Suspense fallback={<p>loading...</p>}>
                        <UsersPage />
                    </Suspense>
                ),
            },
            {
                path: '/constantine/speakers',
                element: (
                    <Suspense
                        fallback={
                            <Blocks
                                visible={true}
                                height="80"
                                width="80"
                                ariaLabel="blocks-loading"
                                wrapperStyle={{}}
                                wrapperClass="blocks-wrapper"
                            />
                        }
                    >
                        <SpeakersPage />
                    </Suspense>
                ),
            },
        ],
    },
])

export const AppRoutes = () => {
    return <RouterProvider router={router} />
}
