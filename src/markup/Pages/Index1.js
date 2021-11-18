import React, {Component} from 'react';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import {Link} from 'react-router-dom';
import CountUp from 'react-countup';
import OurPartners from './../Element/OurPartners';
import Slider from './../Element/Slider';
import Accord from './../Element/Accord';
	
//Images	
var img1 = require('./../../images/background/bg5.jpg');
var serblog1 = require('./../../images/our-services/pic1.jpg');
var serblog2 = require('./../../images/our-services/pic2.jpg');
var serblog3 = require('./../../images/our-services/pic3.jpg');
var serblog4 = require('./../../images/our-services/pic4.jpg');
var img2 = require('./../../images/background/bg1.jpg');
var img3 = require('./../../images/background/bg5.jpg');
var img4 = require('./../../images/background/bg4.jpg');


const blogNews = [
	{
		image: require('./../../images/blog/grid/pic1.jpg'),
		title: 'Evento bautizo 13 de Octubre 2021.',
	},
	{
		image: require('./../../images/blog/grid/pic2.jpg'),
		title: 'cumpleaños 14 de Noviembre del 2021.',
	},
	{
		image: require('./../../images/blog/grid/pic3.jpg'),
		title: 'fiesta de Payasos 15 de diciembre del 2021.',
	},
]


class Index1 extends Component{
	render(){
		return(
			<>
				<Header />
			
				<div className="page-content bg-white">
					<div className="content-block">
						<Slider />
						<div className="section-full content-inner-3" style={{backgroundImage:"url(" + img1 + ")",  backgroundSize:"100%" }}>
							<div className="container">
								<div className="row service-area1">
									<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
										<div className="icon-bx-wraper text-center service-box1" style={{backgroundImage: "url(" + serblog1 + ")"}}>
											<div className="icon-content">
												<h2 className="dlab-tilte text-white">Bautizos</h2>
												<p>Toda clase de eventos solciales como:</p>
												<div className="dlab-separator style1 bg-primary"></div>
												<Link to={('/shop-product-details')} className="btn btnhover">More details <i className="fa fa-angle-double-right m-l5"></i></Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
										<div className="icon-bx-wraper text-center service-box1" style={{backgroundImage: "url(" + serblog2 + ")"}}>
											<div className="icon-content">
												<h2 className="dlab-tilte text-white">Cumpleaños</h2>
												<p>Toda clase de eventos solciales como:</p>
												<div className="dlab-separator style1 bg-primary"></div>
												<Link to={('/shop-product-details')} className="btn btnhover">More details <i className="fa fa-angle-double-right m-l5"></i></Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
										<div className="icon-bx-wraper text-center service-box1" style={{backgroundImage: "url(" + serblog3 + ")"}}>
											<div className="icon-content">
												<h2 className="dlab-tilte text-white">Matrimonios</h2>
												<p>Toda clase de eventos solciales como: </p>
												<div className="dlab-separator style1 bg-primary"></div>
												<Link to={('/shop-product-details')} className="btn btnhover">More details <i className="fa fa-angle-double-right m-l5"></i></Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
										<div className="icon-bx-wraper text-center service-box1" style={{backgroundImage: "url(" + serblog4 + ")"}}>
											<div className="icon-content">
												<h2 className="dlab-tilte text-white">y Mas</h2>
												<p>Toda clase de eventos solciales como: </p>
												<div className="dlab-separator style1 bg-primary"></div>
												<Link to={('/shop-product-details')} className="btn btnhover">More details <i className="fa fa-angle-double-right m-l5"></i></Link>
											</div>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-12">
										<div className="section-head mb-0 text-center">
											<div className="icon-bx icon-bx-xl">
												<img src={require('./../../images/cake1.jpg')} alt="" />
											</div>
											<h3 className="text-primary">Estas invitado a ser parte de:</h3>
											<p className="main-text">Restaurant Local y Eventos <strong>Manto</strong>™ en la ciudad de PUNO - Bienvenido y se parte de todos lo servicios que ofrecemos como: Bautizos, Cortes de Pelo, Cumpleaños, Fiesta de Payasos, Fiestas de Promocion, Fiesta de Quinceaños, Fiestas Patronales y mucho más. Este equipo se conforma de personas multidisciplinarias y que atienden y asesoran todo tipo de celebraciones, ellos estan gustosos de planificar cada detalle de tu evento.</p>
											<p>El espacio ideal para tener recepciones y/o eventos, cuenta con un amplio area verde y ofrece una carta con platillos seleccionados. Se trata de un entorno cálido para tener una recepción excelente y personalizada.  <Link to={''}>Ubicanos Ahora</Link></p>
										</div>
									</div>
								</div>
							</div>
						</div>					
						<div className="section-full content-inner service-area2 bg-img-fix bg-line-top bg-line-bottom" style={{backgroundImage: "url(" + img4 + ")",  backgroundSize: "cover" }}>
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="section-head text-center">
											<h2 className="text-white">Ofrecemos Los Mejores Platos - Extra</h2>
											<p className="text-bold">Estamos ubicados en la Salida Tacna - Jr Leoncio Prado Cuadra 20. </p>
											<div className="dlab-separator style1 bg-primary"></div>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-4 m-b30">
										<img src={require('./../../images/about/pic1.jpg')} className="img-cover radius-sm" alt="" />
									</div>
									<div className="col-lg-8">
										<div className="row p-l30">
											<div className="col-lg-6 col-sm-6 m-b30">
												<div className="icon-bx-wraper text-white service-box2">
													<div className="icon-bx">
														<Link to={''} className="icon-cell"><img src={require('./../../images/icons/service-icon/icon2.png')} alt="" /></Link>
													</div>
													<div className="icon-content">
														<h5 className="dlab-tilte">Carnes</h5>
														<p>Carnes Blancas - Carnes Rojas</p>
													</div>
												</div>
											</div>
											<div className="col-lg-6 col-sm-6 m-b30">
												<div className="icon-bx-wraper text-white service-box2">
													<div className="icon-bx">
														<Link to={''} className="icon-cell"><img src={require('./../../images/icons/service-icon/icon3.png')} alt="" /></Link> 
													</div>
													<div className="icon-content">
														<h5 className="dlab-tilte">Pasteles</h5>
														<p>Los mejores Sabores y Coloroes en nuestros pasteles</p>
													</div>
												</div>
											</div>
											<div className="col-lg-6 col-sm-6 m-b30">
												<div className="icon-bx-wraper text-white service-box2">
													<div className="icon-bx">
														<Link to={''} className="icon-cell"><img src={require('./../../images/icons/service-icon/icon4.png')} alt="" /></Link> 
													</div>
													<div className="icon-content">
														<h5 className="dlab-tilte">Empanadas y Panes</h5>
														<p>Panes Frios y Calientes</p>
													</div>
												</div>
											</div>
											<div className="col-lg-6 col-sm-6 m-b30">
												<div className="icon-bx-wraper text-white service-box2">
													<div className="icon-bx">
														<Link to={''} className="icon-cell"><img src={require('./../../images/icons/service-icon/icon5.png')} alt="" /></Link> 
													</div>
													<div className="icon-content">
														<h5 className="dlab-tilte">Desayunos </h5>
														<p>Cafesitos y Matecitos Calientes</p>
													</div>
												</div>
											</div>
											<div className="col-lg-6 col-sm-6 m-b30">
												<div className="icon-bx-wraper text-white service-box2">
													<div className="icon-bx">
														<Link to={''} className="icon-cell"><img src={require('./../../images/icons/service-icon/icon5.png')} alt="" /></Link> 
													</div>
													<div className="icon-content">
														<h5 className="dlab-tilte">Extras</h5>
														<p>Platos extras en todos los sabores.</p>
													</div>
												</div>
											</div>
											<div className="col-lg-6 col-sm-6 m-b30">
												<div className="icon-bx-wraper text-white service-box2">
													<div className="icon-bx"> 
														<Link to={''} className="icon-cell"><img src={require('./../../images/icons/service-icon/icon1.png')} alt="" /></Link>  
													</div>
													<div className="icon-content">
														<h5 className="dlab-tilte">Cumpleaños</h5>
														<p>Especiales Para cumpleaños.</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full content-inner bg-gray" style={{backgroundImage:"url(" + img2 + ")",  backgroundSize:"100%"}}>
							<div className="container">
								<div className="row faq-area1">
									<div className="col-lg-6 m-b30">
										<div className="m-r20">
											<div className="section-head text-left">
												<h2>Nuestros Puntos de Atencion al Cliente</h2>
												<p className="text-bold">Atenciones en toda la Ciudad de Puno </p>
												<div className="dlab-separator style1 bg-primary"></div>
											</div>
											<div className="clearfix">
												<p>Nuestro proposito atender en toda la ciudad de puno. servicios delivery asi como atenciones desde las redes sociales como fcebook whatsapp e instgram .</p>
												<p className="text">Bodas, fiestas infantiles, bautizos y primera comunión, baby shower, cumpleaños y aniversarios, fiestas de fin de año, eventos corporativos, congresos, conferencias, seminarios, lanzamientos de producto, ferias de negocios, culturales, sociales, artísticos, fiestas especiales, eventos deportivos, entregas de premios, graduaciones y quince años.<strong>¿Cuáles son las características más importantes de las instalaciones?</strong>
							Contamos con Jardines, Carpas, Pista de baile, Estacionamiento, Acceso discapacitados</p>
												<p>¿Es posible que los clientes contraten su propio DJ y/o fotógrafo?
													Si es posible</p>
												<Link to={'/faq'} className="btn btn-md btnhover shadow m-t30"><i className="fa fa-angle-right m-r10"></i>Leer Mas...</Link>
											</div>
										</div>
									</div>
									<div className="col-lg-6 m-b30">
										<Accord />
									</div>
								</div>
							</div>
						</div>
						<div className="section-full bg-white">
							<div className="container-fluid">
								<div className="row">
									<div className="col-lg-3 col-md-6 col-sm-6">
										<div className="port-box1 text-white">
											<div className="dlab-media">
												<img src={require('./../../images/our-work/pic1.jpg')} alt="" />
											</div>
											<div className="dlab-info">
												<h2 className="title">Nuestras Cartas</h2>
											</div>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 col-sm-6">
										<div className="port-box1 text-white">
											<div className="dlab-media">
												<img src={require('./../../images/our-work/pic2.jpg')} alt="" />
											</div>
											<div className="dlab-info">
												<h2 className="title">Extras</h2>
											</div>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 col-sm-6">
										<div className="port-box1 text-white">
											<div className="dlab-media">
												<img src={require('./../../images/our-work/pic3.jpg')} alt="" />
											</div>
											<div className="dlab-info">
												<h2 className="title">Cuy Chactado</h2>
											</div>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 col-sm-6">
										<div className="port-box1 text-white m-md-b0 m-sm-b0">
											<div className="dlab-media">
												<img src={require('./../../images/our-work/pic2.jpg')} alt="" />
											</div>
											<div className="dlab-info">
												<h2 className="title">Especiales - Pre Reserva</h2>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full bg-white" style={{backgroundImage:"url(" + img3 + ")", backgroundSize:"100%" }}>
							<div className="container content-inner">
								<div className="row">
									<div className="col-lg-12">
										<div className="section-head text-center">
											<div className="icon-bx icon-bx-xl">
												<img src={require('./../../images/cake1.jpg')} alt="" />
											</div>
											<h3>Nuestras Estadisticas En Servicios</h3>
											<p>Mas de 400 atenciones desde siempre</p>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
										<div className="counter-style-1 text-center">
											<div className="counter-num text-primary">
												<span className="counter"><CountUp end={6} /></span>
												<small>+</small>
											</div>
											<span className="counter-text">Años de Experiencia</span>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
										<div className="counter-style-1 text-center">
											<div className="counter-num text-primary">
												<span className="counter"><CountUp end={1002} /></span>
											</div>
											<span className="counter-text">Comensales </span>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
										<div className="counter-style-1 text-center">
											<div className="counter-num text-primary">
												<span className="counter"><CountUp end={36} /></span>
												<small>k</small>
											</div>
											<span className="counter-text">Clientes en fiestas</span>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
										<div className="counter-style-1 text-center">
											<div className="counter-num text-primary">
												<span className="counter"><CountUp end={99} /></span>
											</div>
											<span className="counter-text">Productos </span>
										</div>
									</div>
								</div>
							</div>
							<div className="container">
								<div className="row m-lr0 about-area1">
									<div className="col-lg-6 p-lr0">
										<img className="img-cover" src={require('./../../images/about/localmantoubicacion.jpg')} alt="" />
									</div>
									<div className="col-lg-6 p-lr0 d-flex align-items-center text-center">
										<div className="about-bx">
											<div className="section-head text-center text-white">
												<h4 className="text-white">Ubicación</h4>
												<p>Jr. Leoncio Prado N° 2074 - Puno - Peru</p>
												<div className="icon-bx">
													<img src={require('./../../images/icons/service-icon/icon2.png')} alt="" />
												</div>
											</div>
											<p>A unos pasos de las Torres de San Carlos de Puno - Jr. Leoncio Prado Nro 2074 (Salida Puno - Moquegua)</p>
											<Link to={'about-1'} className="btn-secondry white btnhover btn-md"><i className="fa fa-cart"></i>ABRIR EN GOOGLE MAPS</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="container">
								<div className="row client-area1 p-t80">
									<OurPartners  />
								</div>
							</div>
							<div className="container content-inner">
								<div className="row">
									<div className="col-lg-12">
										<div className="section-head text-center">
											<div className="icon-bx icon-bx-xl">
												<img src={require('./../../images/cake1.jpg')} alt="" />
											</div>
											<h3>Algunos de Nuestros Eventos Mas Recientes</h3>
											<p>Lista de eventos nuevos y pasados.</p>
										</div>
									</div>
								</div>
								<div className="row">
									{blogNews.map((item,index) =>(
									
										<div className="col-lg-4 col-md-6" key={index}>
											<div className="blog-post blog-grid blog-rounded" >
												<div className="dlab-post-media dlab-img-effect"> 
													<Link to={'/blog-single-sidebar'}><img src={item.image} alt="" /></Link> 
												</div>
												<div className="dlab-info p-a25">
													<div className="dlab-post-title">
														<h4 className="post-title"><Link to={'/blog-single-sidebar'}>{item.title}</Link></h4>
													</div>
													<div className="dlab-post-meta">
														<ul>
															<li className="post-folder">
																<i className="fa fa-folder-open-o"></i> 
																<Link to={''}> Facebook</Link>,  
																<Link to={''}> Leer Mas</Link> 
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									))}
									
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

export default Index1;