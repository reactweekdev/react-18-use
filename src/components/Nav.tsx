import { NavLink } from 'react-router-dom'

const Nav = () => (
    <div className='nav'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/constantine/speakers'>Constantine Speakers</NavLink>
    </div>
)

export default Nav
