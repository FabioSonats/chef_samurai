import {useTheme} from  '../hooks/useTheme'
import { Link } from 'react-router-dom'
//styles
import './Navbar.css'
//components
import Searchbar from './Searchbar'


export default function Navbar() {
  const {color} = useTheme()


  return (
    <div className='navbar' style={{background: color}}>
      <nav>
        <Link to='/' className='brand'>
            <h1>chef Samurai</h1>
        </Link>
        <Searchbar />
        <Link to='/create'>Crie uma receita</Link>
      </nav>
    </div>
  )
}
