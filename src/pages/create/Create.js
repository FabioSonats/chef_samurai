import { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { projectFirestore } from '../../firebase/config';

export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientsInput = useRef(null)
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    const doc = { title, ingredients, method, cookingTime: cookingTime + ' minutes' }

    try {
      projectFirestore.collection('recipes').add(doc)
      history.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  const handleAdd = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim()

    if (ing && !ingredients.includes(ing)) {
      setIngredients(prevIngredients => [...prevIngredients, ing])
    }
    setNewIngredient('')
    ingredientsInput.current.focus()
  }

  const removeIngredient = (ingredientToRemove) => {
    setIngredients(ingredients.filter(ing => ing !== ingredientToRemove))
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-charcoal mb-4">
            Criar Nova Receita
          </h1>
          <p className="text-lg text-brown">
            Compartilhe sua receita deliciosa com o mundo!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Nome da Receita */}
            <div className="bg-warm-white rounded-xl shadow-warm p-6 border border-golden border-opacity-20">
              <label className="block">
                <span className="text-lg font-semibold text-charcoal mb-3 block">
                  Nome da Receita
                </span>
                <input 
                  type='text' 
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  placeholder="Ex: Bolo de Chocolate"
                  className="w-full px-4 py-3 border border-golden border-opacity-30 rounded-lg focus:ring-2 focus:ring-tomato focus:border-transparent transition-all duration-200 bg-warm-white"
                  required
                />
              </label>
            </div>

            {/* Ingredientes */}
            <div className="bg-warm-white rounded-xl shadow-warm p-6 border border-golden border-opacity-20">
              <label className="block">
                <span className="text-lg font-semibold text-charcoal mb-3 block">
                  Ingredientes
                </span>
                <div className="flex gap-2 mb-4">
                  <input 
                    type='text'
                    onChange={(e) => setNewIngredient(e.target.value)}
                    value={newIngredient}
                    ref={ingredientsInput}
                    placeholder="Ex: 2 xícaras de farinha"
                    className="flex-1 px-4 py-3 border border-golden border-opacity-30 rounded-lg focus:ring-2 focus:ring-tomato focus:border-transparent transition-all duration-200 bg-warm-white"
                  />
                  <button 
                    type="button"
                    onClick={handleAdd} 
                    className="bg-fresh-green hover:bg-herb text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 shadow-warm px-6"
                  >
                    Adicionar
                  </button>
                </div>

                {ingredients.length > 0 && (
                  <div className="bg-fresh-green bg-opacity-10 rounded-lg p-4">
                    <p className="text-sm font-medium text-charcoal mb-2">Ingredientes adicionados:</p>
                    <div className="flex flex-wrap gap-2">
                      {ingredients.map(ingredient => (
                        <span 
                          key={ingredient}
                          className="bg-fresh-green text-white px-3 py-1 rounded-full text-sm flex items-center gap-2"
                        >
                          {ingredient}
                          <button
                            type="button"
                            onClick={() => removeIngredient(ingredient)}
                            className="text-white hover:text-warm-red"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </label>
            </div>

            {/* Modo de Preparo */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <label className="block">
                <span className="text-lg font-semibold text-gray-700 mb-3 block">
                  Modo de Preparo
                </span>
                <textarea
                  onChange={(e) => setMethod(e.target.value)}
                  value={method}
                  placeholder="Descreva passo a passo como preparar a receita..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white min-h-[200px] resize-y"
                  required
                />
              </label>
            </div>

            {/* Tempo de Preparo */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <label className="block">
                <span className="text-lg font-semibold text-gray-700 mb-3 block">
                  Tempo de Preparo (minutos)
                </span>
                <input
                  type='number'
                  onChange={(e) => setCookingTime(e.target.value)}
                  value={cookingTime}
                  placeholder="Ex: 30"
                  className="w-full max-w-xs px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                  required
                />
              </label>
            </div>

            {/* Botão de Envio */}
            <div className="text-center">
              <button 
                type="submit"
                className="bg-tomato hover:bg-orange text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 shadow-warm text-lg"
              >
                Criar Receita
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
