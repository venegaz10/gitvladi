import React, { Component } from 'react';
import { Link } from 'react-router-dom';

var bgfoter = require('./../../images/background/bg2.jpg');	


class Footer extends Component{
	
	render(){
		return(
			<footer className="site-footer " style={{backgroundImage: "url(" + bgfoter + ")", backgroundSize: 'cover'}} >
				
				<div className="footer-top bg-line-top">
					<div className="container">
						<div className="row">
							<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
								<div className="widget widget_getintuch">
									<h5 className="footer-title text-white">Contactanos</h5>
									<ul>
										<li>
											<i className="fa fa-map-marker"></i> 
											<p>Puno - Puno - Peru</p>
										</li>
										<li>
											<i className="fa fa-phone"></i> 
											<p>995260685</p>
										</li>
										<li>
											<i className="fa fa-mobile"></i> 
											<p>(+51) 995260685</p>
										</li>
										<li>
											<i className="fa fa-envelope"></i> 
											<p>evenosmanto@gmail.com</p>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
								<div className="widget recent-posts-entry">
									<h4 className="footer-title">Eventos Recientes</h4>
									<div className="widget-post-bx">
										<div className="widget-post clearfix">
											<div className="dlab-post-media radius-sm"> 
												<img src= {require('./../../images/blog/recent-blog/pic1.jpg')} alt="" /> 
											</div>
											<div className="dlab-post-info">
												<div className="dlab-post-header">
													<h6 className="post-title"><Link to={'/blog-single'}>Corte de Pelo 1 año</Link></h6>
												</div>
												<div className="dlab-post-meta">
													<ul>
														<li className="post-date"> <i className="la la-clock-o"></i><strong>15 de Nomviembre, 2021</strong> </li>
													</ul>
												</div>
											</div>
										</div>
										<div className="widget-post clearfix">
											<div className="dlab-post-media radius-sm"> 
												<img src= {require('./../../images/blog/recent-blog/pic1.jpg')} alt="" /> 
											</div>
											<div className="dlab-post-info">
												<div className="dlab-post-header">
													<h6 className="post-title"><Link to={'blog-single'}>Ceremonia Bautizo Primera Comunion</Link></h6>
												</div>
												<div className="dlab-post-meta">
													<ul>
														<li className="post-date"> <i className="la la-clock-o"></i><strong>Diciembre del 2021</strong> </li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
								<div className="widget widget_services border-0">
								   <h4 className="footer-title">Enlaces Rapidos</h4>
									<ul className="list-2">
										<li><Link to={'/'}>Inicio</Link></li>
										<li><Link to={'/about-1'}>Nosotros</Link></li>
										<li><Link to={'/our-menu-1'}>La Carta</Link></li>
										<li><Link to={'/faq'}>Preguntas</Link></li>
										<li><Link to={'/blog-grid-2'}>Blog</Link></li>
						
										<li><Link to={'/contact-1'}>Contacto</Link></li>
										
									</ul>
								</div>
							</div>
							<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
								<div className="widget border-0">
								   <h4 className="footer-title">Horarios de Atenciones</h4>
								   <p className="m-b20">Nuestro servicio al cliente y ayuda son 24 horas del dia, 7 dias de la semana.</p>
									<ul className="work-hour-list">
										<li>
											<span className="day"><span>Lunes a Viernes</span></span> 
											<span className="timing">7AM - 5PM</span>
										</li>
										<li>
											<span className="day"><span>Sabados</span></span>
											<span className="timing">5AM - 11PM</span>
										</li>
										<li>
											<span className="day"><span>Domingos</span></span>
											<span className="timing">Cerrado</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div className="footer-bottom">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-md-6 text-left"> <span>Todos los Derechos Reservados Bajo el nombre de su autor © 2021 SistemasTauro</span> </div>
							<div className="col-lg-6 col-md-6 text-right"> 
								<div className="widget-link"> 
									<ul>
										<li><Link to={'about-1'}>Nosotros Somos</Link></li>
										<li><Link to={'faq'}>Faq</Link></li> 
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
			
		)
		
	}
}

export default Footer;