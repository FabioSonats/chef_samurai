import { Link } from 'react-router-dom'
import Trashcan from '../assets/trashcan.svg'
import { projectFirestore } from '../firebase/config'

export default function RecipeList({ recipes, currentPage, totalPages, onPageChange }) {
  if (recipes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Nenhuma receita encontrada...</p>
      </div>
    )
  }

  const handleClick = (id) => {
    if (window.confirm('Tem certeza que deseja deletar esta receita?')) {
      projectFirestore.collection('recipes').doc(id).delete();
    }
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map(recipe => (
          <div key={recipe.id} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative">
            <button 
              onClick={() => handleClick(recipe.id)}
              className="absolute top-3 right-3 p-2 bg-red-100 hover:bg-red-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              title="Deletar receita"
            >
              <img 
                src={Trashcan}
                alt="Deletar receita"
                className="w-4 h-4"
              />
            </button>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{recipe.title}</h3>
              <p className="text-sm text-gray-500 mb-3">
                Tempo: {recipe.cookingTime}
              </p>
              <div className="text-gray-600 text-sm mb-4">
                {recipe.method.substring(0, 100)}...
              </div>
              
              <Link 
                to={`/recipes/${recipe.id}`}
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 shadow-md w-full text-center block"
              >
                Ver Receita Completa
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Paginação */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-12 space-x-2">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            Anterior
          </button>
          
          <div className="flex space-x-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`px-3 py-2 rounded-lg transition-colors duration-200 ${
                  currentPage === page
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            Próximo
          </button>
        </div>
      )}
    </div>
  )
}
