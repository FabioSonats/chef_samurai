import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
//styles
import './Search.css'


//components
import RecipeList from '../../components/RecipeList'


export default function Search() {

  const querySting = useLocation().search
  const queryParams = new URLSearchParams(querySting)
  const query = queryParams.get('q')
  const url = 'http://localhost:3000/recipes?q=' + query
  const { error, isPending, data } = useFetch(url)

  
 
  return (
    <div>
      <h2 className='page-title'>Nenuma receita encontrada para "{query}".</h2>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <RecipeList recipes={data}/>}
    </div>
  )
}
