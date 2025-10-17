import { projectFirestore } from '../../firebase/config';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function Recipe() {
  const {id} = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect (() => {
    setIsPending(true);
   const unsub = projectFirestore.collection('recipes').doc(id).onSnapshot((doc)=> {
      if (doc.exists) {
        setIsPending(false);
        setRecipe(doc.data());
      }else {
        setIsPending(false)
        setError('Não foi possível encontrar uma receita')
      }
    })
    return () => unsub()

  }, [id])

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link 
            to="/" 
            className="text-blue-500 hover:text-blue-600 transition-colors duration-200"
          >
            ← Voltar para receitas
          </Link>
        </nav>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <p className="text-red-600 text-lg">{error}</p>
          </div>
        )}

        {isPending && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            <p className="ml-4 text-gray-600">Carregando receita...</p>
          </div>
        )}

        {recipe && (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Header da Receita */}
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-8">
              <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <span className="text-2xl mr-2">⏱️</span>
                  <span className="font-medium">{recipe.cookingTime}</span>
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* Ingredientes */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="text-3xl mr-3">🥘</span>
                  Ingredientes
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
                    <div 
                      key={index}
                      className="bg-gray-50 rounded-lg p-4 flex items-center hover:bg-gray-100 transition-colors duration-200"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      <span className="text-gray-700">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modo de Preparo */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="text-3xl mr-3">👨‍🍳</span>
                  Modo de Preparo
                </h2>
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                    {recipe.method}
                  </p>
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 shadow-md text-center"
                >
                  Ver Todas as Receitas
                </Link>
                <Link
                  to="/create"
                  className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 shadow-md text-center"
                >
                  Criar Nova Receita
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
