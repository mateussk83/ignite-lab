
import React from 'react'
import ReactDOM from 'react-dom/client' // adaptação do React para funcionar na web pois o React tem mais do que apenas uma plataforma
import App from './App'

import './styles/global.css'; 

ReactDOM.createRoot(document.getElementById('root')!).render(  // create Root é utilizado para chamar a div root apenas uma vez dentro da aplicação e renderizar a mesma!!! 
  <React.StrictMode> 
    <App />       
  </React.StrictMode>
  //para fazer a requisição no Graphql precisa utilizar esta tag do Apollo em volta do APP
  
)
