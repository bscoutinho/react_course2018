import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';

import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Cadastro from './components/Cadastro';

import registerServiceWorker from './registerServiceWorker';

//criação de um component com o conteúdo principal
const Main = withRouter(() => {
  return (
    <div>
      <Navbar />
      <Route exact path="/" component={Welcome} />
      <Route path="/cadastro" component={Cadastro} />
      <Footer />
    </div>
  );
});

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
