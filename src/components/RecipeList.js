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
            <div key={recipe.id} className="bg-warm-white rounded-xl shadow-warm p-6 border border-golden border-opacity-20 group hover:shadow-food transition-all duration-300 hover:-translate-y-1 relative">
              <button 
                onClick={() => handleClick(recipe.id)}
                className="absolute top-3 right-3 p-2 bg-warm-red bg-opacity-10 hover:bg-warm-red hover:bg-opacity-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                title="Deletar receita"
              >
                <img 
                  src={Trashcan}
                  alt="Deletar receita"
                  className="w-4 h-4"
                />
              </button>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">{recipe.title}</h3>
                <p className="text-sm text-paprika mb-3">
                  Tempo: {recipe.cookingTime}
                </p>
                <div className="text-brown text-sm mb-4">
                  {recipe.method.substring(0, 100)}...
                </div>
                
                <Link 
                  to={`/recipes/${recipe.id}`}
                  className="bg-tomato hover:bg-orange text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 shadow-warm w-full text-center block"
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
            className="px-4 py-2 bg-cream text-brown rounded-lg hover:bg-golden hover:text-charcoal disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
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
                    ? 'bg-tomato text-white'
                    : 'bg-cream text-brown hover:bg-golden hover:text-charcoal'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-cream text-brown rounded-lg hover:bg-golden hover:text-charcoal disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            Próximo
          </button>
        </div>
      )}
    </div>
  )
}
