import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import './styles/App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HistorySection from './components/HistorySection/HistorySection';
import VideoSection from './components/VideoSection/VideoSection';
import ContactSection from './components/ContactSection/ContactSection';
import PokemonCard from './components/PokemonCard/PokemonCard';
import Api from './components/Api/Api';





const Home = lazy(() => import('./pages/Home/Home'));
const Pokedex = lazy(() => import('./pages/Pokedex/Pokedex'));
 

const App = () => (
  <React.Fragment>
  <Router>
    <Header />
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/pokedex" component={Pokedex}/>
      </Switch>
    </Suspense>
    <PokemonCard />

  </Router>
  </React.Fragment>
);

export default App;
