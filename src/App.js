import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

// Importar os componentes necessários
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';
import './App.css'
import ThemeSelector from './components/ThemeSelector';
import { useTheme } from './hooks/useTheme'; // Importar o hook

import './App.css'; // Use HashRouter

function App() {
  const { mode } = useTheme();

  return (
    <div className={`App ${mode}`}>
      <HashRouter> {/* Alterar de BrowserRouter para HashRouter */}
        <Navbar />
        <ThemeSelector />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/Recipes/:id">
            <Recipe />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
