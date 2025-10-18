import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { projectFirestore } from '../../firebase/config'
import RecipeList from '../../components/RecipeList'

export default function Search() {
  const [recipes, setRecipes] = useState([])
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')

  useEffect(() => {
    if (!query) return

    setIsPending(true)
    setError(null)

    const unsub = projectFirestore.collection('recipes').onSnapshot((snapshot) => {
      if (snapshot.empty) {
        setError('Nenhuma receita encontrada')
        setIsPending(false)
      } else {
        let results = []
        snapshot.docs.forEach(doc => {
          const data = doc.data()
          // Filtrar receitas que contenham o termo de busca no título ou método
          if (data.title.toLowerCase().includes(query.toLowerCase()) ||
            data.method.toLowerCase().includes(query.toLowerCase())) {
            results.push({ id: doc.id, ...data })
          }
        })
        setRecipes(results)
        setIsPending(false)
      }
    }, (err) => {
      setError(err.message)
      setIsPending(false)
    })

    return () => unsub()
  }, [query])

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-charcoal mb-4">
            Resultados da Busca
          </h1>
          {query && (
            <p className="text-lg text-brown">
              Buscando por: "{query}"
            </p>
          )}
        </div>

        {error && (
          <div className="bg-warm-red bg-opacity-10 border border-warm-red border-opacity-30 rounded-lg p-6 text-center">
            <p className="text-warm-red text-lg">{error}</p>
          </div>
        )}

        {isPending && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-tomato"></div>
            <p className="ml-4 text-brown">Buscando receitas...</p>
          </div>
        )}

        {recipes.length === 0 && !isPending && !error && query && (
          <div className="text-center py-12">
            <p className="text-brown text-lg">
              Nenhuma receita encontrada para "{query}"
            </p>
            <p className="text-paprika mt-2">
              Tente usar termos diferentes ou verifique a ortografia
            </p>
          </div>
        )}

        {recipes.length > 0 && (
          <div>
            <p className="text-paprika mb-6 text-center">
              {recipes.length} receita{recipes.length !== 1 ? 's' : ''} encontrada{recipes.length !== 1 ? 's' : ''}
            </p>
            <RecipeList recipes={recipes} />
          </div>
        )}

        {!query && (
          <div className="text-center py-12">
            <p className="text-brown text-lg">
              Digite um termo de busca na barra de pesquisa
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
