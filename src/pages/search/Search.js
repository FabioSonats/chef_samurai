import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { projectFirestore } from '../../firebase/config';
// styles
import './Search.css';

// components
import RecipeList from '../../components/RecipeList';

export default function Search() {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get('q');

  useEffect(() => {
    setIsPending(true);
    setError(null);

    const unsubscribe = projectFirestore.collection('recipes')
      .where('title', '>=', query)
      .where('title', '<=', query + '\uf8ff')
      .onSnapshot(snapshot => {
        if (snapshot.empty) {
          setError(`Nenhuma receita encontrada para "${query}".`);
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach(doc => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setData(results);
          setIsPending(false);
        }
      }, (err) => {
        setError('Could not fetch the data');
        setIsPending(false);
      });

    return () => unsubscribe();

  }, [query]);

  return (
    <div>
      <h2 className='page-title'>Busca por: "{query}"</h2>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Carregando...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
