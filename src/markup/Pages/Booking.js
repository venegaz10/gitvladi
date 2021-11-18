import React ,{Component} from 'react';

import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';

var img1 = require('./../../images/banner/bnr1.jpg'); 
var img2 = require('./../../images/background/bg5.jpg'); 

class Booking extends Component{
	render(){
		return(
			<>
			
			<Header />
			
			<div className="page-content bg-white">
				
				<div className="dlab-bnr-inr overlay-black-middle" style={{backgroundImage:"url(" + img1 + ")"}}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<h1 className="text-white">Reservas</h1>
							
							<div className="breadcrumb-row">
								<ul className="list-inline">
									<li><Link to={'./'}><i className="fa fa-home"></i></Link></li>
									<li>Reservas</li>
								</ul>
							</div>
							
						</div>
					</div>
				</div>
				
				<div className="section-full content-inner" style={{backgroundImage:"url(" + img2 + ")", backgroundSize:"100%"}}>
					<div className="container">
						<div className="row">
							<div className="col-xl-6 col-lg-6 m-b30">
								<div className="appointment-form">
									<div className="section-head m-b30">
										<h2 className="main-title">Eliga su Fecha y Hora</h2>
										<p>Mediante el siguiente formulario puede hacer sus reservas. Se respondera en la brevedad posible.</p>
									</div>
									<div className="dzFormMsg"></div>
									<form method="post" className="dzForm" action="script/contact.php">
										<input type="hidden" value="Contact" name="dzToDo" />
										<div className="row sp15">
											<div className="col-lg-6 col-md-6 col-sm-6">
												<div className="form-group">
													<div className="input-group">
														<input name="dzName" type="text" required className="form-control" placeholder="Tu Nombre" />
													</div>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-6">
												<div className="form-group">
													<div className="input-group"> 
														<input name="dzEmail" type="email" className="form-control" required  placeholder="Tu Correo Electronico" />
													</div>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-6">
												<div className="form-group">
													<div className="input-group">
														<input name="dzPhone" type="text" required className="form-control" placeholder="Numero de Telefono" />
													</div>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-6">
												<div className="form-group">
													<div className="input-group"> 
														<input type="text" className="form-control" required  placeholder="Hora" />
													</div>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-6">
												<div className="form-group">
													<div className="input-group">
														<input name="dzPhone" type="text" required className="form-control" placeholder="Asunto o Para que" />
													</div>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-6">
												<div className="form-group">
													<div className="input-group"> 
														<input type="text" className="form-control" required  placeholder="Fecha" />
													</div>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<div className="input-group">
														<textarea name="dzMessage" rows="4" className="form-control" required placeholder="Escribe tu mensaje..."></textarea>
													</div>
												</div>
											</div>
											<div className="col-lg-12">
												<div className="form-group">
													<div className="input-group">
														<div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
														<input className="form-control d-none" style={{display:"none"}} data-recaptcha="true" required data-error="Please complete the Captcha" />
													</div>
												</div>
											</div>
											<div className="col-md-12">
												<button name="submit" type="submit" value="Submit" className="btn btnhover">ENVIAR AHORA</button>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div className="col-xl-6 col-lg-6 m-b30">
								<img src={require('./../../images/about/pic7.jpg')} alt="" className="img-cover radius-sm" />
							</div>		
						</div>
					</div>
				</div>
				
			 </div>
			
			<Footer />
			</>
		)
	}
	

}

export default Booking;