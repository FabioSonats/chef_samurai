import { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { projectFirestore } from '../../firebase/config';
//styles
import './Create.css'

export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngridients] = useState([])
  const ingredientsInput = useRef(null)
  const history = useHistory()


  const handleSubmit = (e) => {
    e.preventDefault()
    const doc = {title, ingredients, method, cookingTime: cookingTime + ' minutos'}

    try {
      projectFirestore.collection('recipes').add(doc)
      history.push('/')

    } catch(err) {
      console.log(err)
    }

   }

  const handleAdd = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim()


    if (ing && !ingredients.includes(ing)){
      setIngridients(prevIngredients => [...prevIngredients, ing])
    }
    setNewIngredient('')
    ingredientsInput.current.focus()
  }

  return (
    <div className='create'>
      <h2 className='page-title'>Adicione uma nova receita</h2>

      
      
      <form onSubmit={handleSubmit}>

        <label>
          <span>Nome da receita</span>
          <input type='text' onChange={(e) => setTitle(e.target.value)}
          value={title}
          required/>
        </label>

        <label>
          <span>Ingredientes:</span>
          <div className='ingredients'></div>
          <input 
              type='text'
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientsInput}
           />
          <button onClick={handleAdd} className='button' >adicionar</button>
        </label>
        <p>Ingredientes adicionados: {ingredients.map(i => <em key={i}>{i}, </em>)}</p>
        <label>
          <span>Modo de preparo:</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
             />
        </label>
        <label>
          <span>Tempo de preparo (minutos) </span>
          <input type='number'
          onChange={(e) => setCookingTime(e.target.value)}
          value={cookingTime}
          required />
        </label>

        <button className='button'>Enviar</button>
      </form>

      
    </div>
  )
}
