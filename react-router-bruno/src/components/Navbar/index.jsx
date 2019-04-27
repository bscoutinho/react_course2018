import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    
    <nav>
        <div className="navbar navbar-inverse bg-caixa">
            <div className="navbar-header">
                <a className="navbar-brand" href="index.html">
                    <img src="assets/images/caixa/logobranco.png" style={{width: '100px', height: 'auto', marginTop: '-2px'}} alt=""/>
                </a>

                <ul className="nav navbar-nav pull-right visible-xs-block">
                    <li>
                        <a data-toggle="collapse" data-target="#navbar-mobile">
                            <i className="icon-tree5"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="navbar navbar-default" id="navbar-second">
            <ul class="nav navbar-nav no-border visible-xs-block">
                <li>
                    <a className="text-center collapsed" data-toggle="collapse" data-target="#navbar-second-toggle">
                        <i className="icon-menu7"></i>
                    </a>
                </li>
            </ul>

            <div className="navbar-collapse collapse" id="navbar-second-toggle">
                <ul className="nav navbar-nav navbar-nav-material">
                    <li className="active">
                        <Link className="nav-link" activeClassName="active" to="/">
                            <i className="icon-home position-left corcaixa-azul"></i> Início
                        </Link>
                    </li>

                    <li className="dropdown" activeClassName="active">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                            <i className="icon-database position-left corcaixa-azul"></i> Cessão
                            <span className="caret"></span>
                        </a>

                        <ul className="dropdown-menu width-200">
                            <li>
                                <Link className="nav-link"  to="/cadastro">
                                    <i className="icon-stack-plus corcaixa-azul"></i> Cadastro React
                                </Link>    
                            </li>
                        </ul>
                    </li>
                </ul>    
            </div>
        </div>
    </nav>
    
  );
};

export default Navbar;
