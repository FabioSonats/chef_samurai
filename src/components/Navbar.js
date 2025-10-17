import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'

export default function Navbar() {
  return (
    <div className="bg-gradient-to-r from-purple-400 to-blue-400 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to='/' className="flex items-center space-x-2">
            <h1 className="text-xl font-bold text-white">Chef Samurai</h1>
          </Link>
          
          <div className="flex-1 max-w-lg mx-8">
            <Searchbar />
          </div>
          
          <Link 
            to='/create' 
            className="bg-white text-purple-600 hover:bg-yellow-200 hover:text-purple-600 font-medium py-2 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Criar Receita
          </Link>
        </div>
      </nav>
    </div>
  )
}
