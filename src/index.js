import React from 'react';
import { createRoot } from 'react-dom';
import App from 'components/App.jsx'; // Importa el componente App

createRoot.render(
  <App />,
  document.getElementById('root') // Renderiza el componente App en el elemento con id "root"
);
