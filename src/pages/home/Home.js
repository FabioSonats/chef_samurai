import { projectFirestore } from '../../firebase/config'
import { useEffect, useState } from 'react'
import RecipeList from '../../components/RecipeList'

export default function Home() {
  const [allRecipes, setAllRecipes] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  const recipesPerPage = 6

  useEffect(() => {
    setIsPending(true)

    const unsub = projectFirestore.collection('recipes').onSnapshot((snapshot) => {
      if (snapshot.empty) {
        setError('Nenhuma receita para mostrar')
        setIsPending(false)
      } else {
        let results = []
        snapshot.docs.forEach(doc => {
          results.push({ id: doc.id, ...doc.data() })
        })
        setAllRecipes(results)
        setIsPending(false)
      }
    }, (err) => {
      setError(err.message)
      setIsPending(false)
    })

    return () => unsub()

  }, [])

  // Calcular receitas da página atual
  const totalPages = Math.ceil(allRecipes.length / recipesPerPage)
  const startIndex = (currentPage - 1) * recipesPerPage
  const endIndex = startIndex + recipesPerPage
  const currentRecipes = allRecipes.slice(startIndex, endIndex)

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }


  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Receitas Deliciosas
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra receitas incríveis e compartilhe suas criações culinárias
          </p>
          {allRecipes.length > 0 && (
            <p className="text-sm text-gray-500 mt-2">
              {allRecipes.length} receita{allRecipes.length !== 1 ? 's' : ''} encontrada{allRecipes.length !== 1 ? 's' : ''}
            </p>
          )}

        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {isPending && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            <p className="ml-4 text-gray-600">Carregando receitas...</p>
          </div>
        )}

        {currentRecipes.length > 0 && (
          <RecipeList
            recipes={currentRecipes}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  )
}
