import { createBrowserRouter } from 'react-router-dom'

import Root from './root'
import UsersPage from '../users/UsersPage'
import SpeakersPage from '../constantineSpeakers/SpeakersPage'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: '/',
                element: <UsersPage />
            },
            {
                path: '/constantine/speakers',
                element:  <SpeakersPage />
            }]
    }]
)

