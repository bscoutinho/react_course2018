import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';

import Login from './components/Login'
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import SingleArticle from './components/SingleArticle';
import CreateArticle from './components/CreateArticle';

import registerServiceWorker from './registerServiceWorker';

//criação de um component com o conteúdo principal
const Main = withRouter(( {location} ) => {
  return (
    <div>
      
      {
        location.pathname !== '/login' &&
        <Navbar />
      }
      
      <Route exact path="/" component={Welcome} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/article/:slug" component={SingleArticle} />
      <Route path="/articles/create" component={CreateArticle} />
      
      {
        location.pathname !== '/login' &&
        <Footer />
      }

    </div>
  );
});

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
