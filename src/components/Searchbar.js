import { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function Searchbar() {
    const [term, setTerm] = useState('')
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`/search?q=${term}`)
    }

  return (
    <div className="w-full">
        <form onSubmit={handleSubmit} className="relative">
            <div className="relative">
                <input 
                    type='text'
                    id='search'
                    placeholder="Pesquisar receitas..."
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    className="w-full px-4 py-2 bg-warm-white bg-opacity-95 border border-golden border-opacity-30 rounded-full text-charcoal placeholder-brown focus:outline-none focus:ring-2 focus:ring-golden focus:ring-opacity-50 focus:border-transparent transition-all duration-200"
                    required
                />
            </div>
        </form>
    </div>
  )
}
