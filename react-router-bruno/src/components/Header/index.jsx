import React from 'react';

//component Header com props
const Header = ({ icone, titulo }) => {
  return (
    <div className="page-header">
        <div className="page-header-content">
            <div className="page-title">
                <h4>
                    <i className={`${icone} position-left`}></i>
                    <span className="text-semibold">SICED</span> - {titulo}
                    <small className="display-block">Sistema de Gestão de Empregados Cedidos</small>
                </h4>
            </div>
        </div>
    </div>
  );
};

export default Header;