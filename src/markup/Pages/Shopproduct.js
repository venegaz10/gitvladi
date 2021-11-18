import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import {Form} from 'react-bootstrap';

var img1= require('./../../images/banner/bnr1.jpg');

class Shopproduct extends Component{
	render(){
		return(
			<>
				<Header />
				<div className="page-content bg-white">
					
					<div className="dlab-bnr-inr overlay-black-middle" style={{backgroundImage:"url(" + img1 + ")"}}>
						<div className="container">
							<div className="dlab-bnr-inr-entry">
								<h1 className="text-white">Detalles Evento - Cumpleaños</h1>
								
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to={'./'}><i className="fa fa-home"></i></Link></li>
										<li>Detalles Evento - Cumpleaños</li>
									</ul>
								</div>
								
							</div>
						</div>
					</div>
					
					<div className="content-block">
						
						<div className="section-full content-inner-1 bg-gray-light">
							<div className="container woo-entry">
								<div className="row">
									<div className="col-lg-6 m-b30">
										<div className="product-gallery on-show-slider lightgallery" id="lightgallery"> 
											<div className="dlab-box">
												<div className="dlab-thum-bx">
													<img src={require('./../../images/product/item2.jpg')} alt="" />
													<span data-exthumbimage="images/product/item2.jpg" data-src={require("./../../images/product/item2.jpg")} className="check-km" title="Image 1 Title will come here" >		
														<i className="fa fa-search"></i>
													</span>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 m-b30">
										<form method="post" className="cart sticky-top">
										<div className="dlab-post-title">
											<h4 className="post-title">Especificaciones del Evento</h4>
											<p className="m-b10">El espacio ideal para tener recepciones y/o eventos, cuenta con un amplio area verde y ofrece una carta con platillos seleccionados. Se trata de un entorno cálido para tener una recepción excelente y personalizada.</p>
											<div className="dlab-divider bg-gray tb15">
												<i className="icon-dot c-square"></i>
											</div>
										</div>
										<div className="relative">
											<h3 className="m-tb10">S/. 340.00 </h3>
											<div className="shop-item-rating">
												<span className="rating-bx"> 
													<i className="fa fa-star"></i> 
													<i className="fa fa-star"></i> 
													<i className="fa fa-star"></i> 
													<i className="fa fa-star-o"></i> 
													<i className="fa fa-star-o"></i> 
												</span>
												<span>4.5 Puntuacion</span>
											</div>
										</div>
										
										<div className="dlab-divider bg-gray tb15">
											<i className="icon-dot c-square"></i>
										</div>
										<div className="row">
											<div className="m-b30 col-md-7 col-sm-8">
												<h6>Tipo de Eleccion:</h6>
												<div className="btn-group product-item-size" data-toggle="buttons">
													<label className="btn">
														<input name="options" id="option7" type="radio" /> Bajo
													</label>
													<label className="btn active">
														<input name="options " id="option8" type="radio" /> Medio
													</label>
													<label className="btn"> 
														<input name="options" id="option9" type="radio" /> Alto
													</label>
												</div>
											</div>
											<div className="m-b30 col-md-5 col-sm-4">
												<h6>Seleciona la Cantidad:</h6>
												<div className="quantity btn-quantity style-2">
													<Form>
														<Form.Group controlId="exampleForm.SelectCustom">
															
																<Form.Control as="select" custom>
																	<option>1</option>
																	<option>2</option>
																	<option>3</option>
																	<option>4</option>
																	<option>5</option>
																</Form.Control>
														</Form.Group>
													</Form>
												</div>
											</div>
											
										</div>
										
									</form>
									</div>
								</div>
								
								aqui crear

							</div>
						</div>
						
					






						
					</div>
				</div>
				
				
				<Footer  />
				
				</>
			)

	}
}
 
export default Shopproduct; 