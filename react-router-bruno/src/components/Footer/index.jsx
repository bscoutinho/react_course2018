import React from 'react';

const Footer = () => {
  return (
    <div className="footer navbar navbar-default bg-caixa">
        <ul className="nav navbar-nav no-border visible-xs-block">
            <li>
                <a className="text-center collapsed" data-toggle="collapse" data-target="#navbar-second">
                    <i className="icon-circle-up2"></i>
                </a>
            </li>
        </ul>

        <div className="navbar-collapse collapse">
            <div className="navbar-text">
                <a href="http://www.caixa.gov.br" target="_blank">
                    <b>Caixa Econômica Federal</b>
                </a> - Sistema de Gestão de Empregados Cedidos
            </div>
        </div>
    </div>
  );
};

export default Footer;
