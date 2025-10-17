import { projectFirestore } from '../../firebase/config';
import { useEffect, useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useParams } from 'react-router-dom'


   
//styles
import './Recipe.css';

export default function Recipe() {
  const {id} = useParams();
  const {mode}  = useTheme();

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

  /*const handleClick = () => {
    projectFirestore.collection('recipes').doc(id).update({
      title: "Agora outra coisa"
    })
  }*/

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {recipe && (
        <>
          <h2 className='page-title'>{recipe.title}</h2>
          <p>Leva {recipe.cookingTime} para ficar pronto</p>
          <ul>
          {recipe.ingredients && recipe.ingredients.map((ing) => <li key={ing}>{ing}</li>)}
          </ul>
          <p className='method'>{recipe.method}</p>
        </>
      )}
    </div>
  )
}
