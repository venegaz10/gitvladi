import React from 'react';
import { Link } from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';

var bnr = require('./../../images/banner/bnr1.jpg');

const Shopregister = ( { history } )=> {
	const submitHandler = (e) => {
		e.preventDefault();
		history.push("/");
	};
	return(
		<>
			<Header />
			<div className="page-content bg-white">
				<div className="dlab-bnr-inr overlay-black-middle bg-pt" style= {{backgroundImage:"url(" + bnr + ")"}}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<h1 className="text-white">Registrar</h1>
							
							<div className="breadcrumb-row">
								<ul className="list-inline">
									<li><Link to={'./'}>Inicio</Link></li>
									<li>Registrar</li>
								</ul>
							</div>
							
						</div>
					</div>
				</div>
				<div className="section-full content-inner-2 shop-account">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 text-center">
								<h2 className="m-b40 m-md-b20">Crear una Cuenta</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<div className="p-a30 border-1 max-w500 m-auto radius-sm">
									<div className="tab-content">
										<form id="login" className="tab-pane active" onSubmit={(e) => submitHandler(e)}>
											<h3 className="m-b5">Informacion Personal</h3>
											<p>Si tiene una cuenta con nosotros, inicie sesión.</p>
											<div className="form-group">
												<label>Nombre *</label>
												<input required="" className="form-control" placeholder="First Name" type="text" />
											</div>
											<div className="form-group">
												<label>Apellidos *</label>
												<input required="" className="form-control" placeholder="Last Name" type="text" />
											</div>
											<div className="form-group">
												<label>E-Mail *</label>
												<input placeholder="hello@example.com" className="form-control" type="email" />
											</div>
											<div className="form-group">
												<label>Password *</label>
												<input defaultValue="Password" className="form-control " placeholder="Type Password" type="password" />
											</div>
											<div className="text-left">
												<button  type="submit" className="btn btnhover">CREAR</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer  />
		</>
	
	)
}

export default  Shopregister;
 