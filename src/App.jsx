import React from 'react';
import './App.css'
import Principal from './componentes/compartidos/Principal';
import Pie from './componentes/compartidos/Pie';
import Encabezado from './componentes/compartidos/Encabezado';

function App() {
  return (
    <div className="App">
     <Encabezado></Encabezado>
      <Principal></Principal>
      <Pie></Pie>
    </div>
  );
}

export default App;
