import React from 'react';
import './App.css'
import {Navbar} from './Componentes/Navbar';
import {Welcome} from './Componentes/Welcome';
import {Footer} from './Componentes/Footer'
import Card from './Componentes/Card'

function App() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
