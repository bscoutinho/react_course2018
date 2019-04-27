import React from 'react';
import Header from '../Header';


const Cadastro = () => {
  return (
    
    <main>
        
        <Header icone="icon-users4" titulo="Cadastro React"/>

        <div className="page-container">
            <div className="page-content">
                
                <div className="content-wrapper">

					<div className="panel panel-primary">
						<div className="panel-heading-caixa bg-caixa">
							<h5 class="panel-title"><img src="assets/images/caixa/logomini_branco.png" class="panel-logo-heading" alt=""/>Filtros</h5>
						</div>

						<div className="panel-body">

							<div className="row">
								<div className="col-md-3">
									<div className="form-group">
										<label>Matrícula</label>
										<input type="text" class="text-size-large form-control a-form-caixa"/>
									</div>
								</div>

								<div className="col-md-9">
									<div className="form-group">
										<label>Nome:</label>
										<input type="text" class="text-size-large form-control a-form-caixa"/>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-md-3">
									<div className="form-group">
										<label>Status</label>
										<select className="form-control a-form-caixa">
											<option value="" disabled selected>Selecione</option>
										</select>
									</div>
								</div>
								<div className="col-md-3">
									<div className="form-group">
										<label>Tipo de Ônus</label>
										<select className="form-control a-form-caixa">
											<option value="" disabled selected>Selecione</option>
										</select>
									</div>
								</div>
								<div className="col-md-3">
									<div className="form-group">
										<label>Órgão Cessionário</label>
										<select className="form-control a-form-caixa">
											<option value="" disabled selected>Selecione</option>
										</select>
									</div>
								</div>
								<div className="col-md-3">
									<div className="form-group">
										<label>Instituto</label>
										<select className="form-control a-form-caixa">
											<option value="" disabled selected>Selecione</option>
										</select>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-md-1 pull-right">
									<div className="form-group">
										<label className="control-label" style={{visibility: 'hidden'}}>.</label>
										<div className="input-group">
											<span className="input-group-btn">
												<button type="button" class="btn btn-warning btn-raised" title="Pesquisar"><i class="icon-folder-search"></i></button>
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="panel panel-primary">
					<div class="panel-heading-caixa bg-caixa">
						<h5 class="panel-title">
							<img src="assets/images/caixa/logomini_branco.png" class="panel-logo-heading" alt=""/>Solicitações Cadastradas</h5>
					</div>

					<div class="panel-body">

						<table class="table table-striped table-bordered table-hover dt-responsive metrotable" width="100%">
							<thead>
								<tr>
									<th class="all" style={{width: '5%'}}>Matrícula</th>
									<th class="all" style={{width: '20%'}}>Nome</th>
									<th class="all" style={{width: '5%'}}>Tipo de Cessão</th>
									<th class="all" style={{width: '5%'}}>Órgão Cessionário</th>
									<th class="all" style={{width: '10%'}}>Cargo</th>
									<th class="all" style={{width: '5%'}}>DAS</th>
									<th class="all" style={{width: '5%'}}>DT Início</th>
									<th class="all" style={{width: '5%'}}>DT Fim</th>
									<th class="all" style={{width: '10%'}}>Status</th>
									<th class="all" style={{width: '5%'}}>Farol</th>
									<th class="all" style={{width: '5%'}}>Ações</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>060090-6</td>
									<td>Rafael Artur Figueireido Galeazzi</td>
									<td>Com Ônus Parcial para CAIXA</td>
									<td>Advocacia Geral da União</td>
									<td>Analista</td>
									<td>DAS 3</td>
									<td>29/01/18</td>
									<td></td>
									<td>Ativa</td>
									<td style={{textAlign: 'center'}}><a href="#" class="btn bg-green-800 btn-rounded btn-icon btn-lg legitRipple"></a></td>
									<td>
										<div class="btn-group pull-right">
											<button type="button" class="btn btn-primary btn-icon btn-raised btn-xs dropdown-toggle" data-toggle="dropdown">
												<i class="icon-menu7"></i>
											</button>
											<ul class="dropdown-menu dropdown-menu-right">
												<li>
													<a href="#">
														<i class="icon-database-check text-warning-600 text-black"></i> Visualizar</a>
												</li>
												<li>
													<a href="#">
														<i class="icon-database-edit2 text-warning-600 text-black"></i> Editar</a>
												</li>
											</ul>
										</div>
									</td>
								</tr>
								
							</tbody>
						</table>

					</div>
				</div>

                </div>
                

            </div>
        </div>


    </main>
	
  );
};

export default Cadastro;