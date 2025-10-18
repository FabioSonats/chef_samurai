import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

// Importar os componentes necessários
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';

function App() {
  return (
    <div className="min-h-screen bg-warm-gradient text-charcoal">
      <HashRouter>
        <Navbar />
        <main className="min-h-screen">
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
        </main>
      </HashRouter>
    </div>
  );
}

export default App;
