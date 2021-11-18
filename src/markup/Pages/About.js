import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import OurPartners from './../Element/OurPartners';
import CountUp from 'react-countup';

var img1 = require('./../../images/banner/bnr1.jpg');
var img2 = require('./../../images/background/bg1.jpg');
var img3 = require('./../../images/background/bg5.jpg');
var img4 = require('./../../images/background/bg3.jpg');


const teamInfo = [
	{
		image: require('./../../images/our-team/member1.jpg'), 	
		name :	'Delivery',
		post : 	'error',
	},
	{
		image: require('./../../images/our-team/member2.jpg'), 	
		name :	'Servicio',
		post : 	'Compromiso completo',
	},
	{
		image: require('./../../images/our-team/member3.jpg'), 	
		name :	'Servicio',
		post : 	'Compromiso completo',
	},
	{
		image: require('./../../images/our-team/member4.jpg'), 	
		name :	'Servicio',
		post : 	'Compromiso completo',
	},
]	
	
class About extends Component{

	render(){
		return(
			<>
			<Header />
		
			<div className="page-content bg-white">
				
				<div className="dlab-bnr-inr overlay-black-middle" style={{backgroundImage:"url(" + img1 + ")"}}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<h1 className="text-white">Nosotros Somos</h1>
							
							<div className="breadcrumb-row">
								<ul className="list-inline">
									<li><Link to={'/'}><i className="fa fa-home"></i></Link></li>
									<li>Nosotros Somos</li>
								</ul>
							</div>
							
						</div>
					</div>
				</div>
				
				<div className="content-block">
					
					<div className="section-full bg-white content-inner" style={{backgroundImage:"url(" + img3 + ")", backgroundSize:"100%" }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<div className="section-head text-center">
										<div className="icon-bx icon-bx-xl">
											<img src={require('./../../images/cake1.jpg')} alt="" />
										</div>
										<h3>Acerca de Nosotros LocalManto</h3>
										<p>Bodas, fiestas infantiles, bautizos y primera comunión, baby shower, cumpleaños y aniversarios, fiestas de fin de año, eventos corporativos, congresos, conferencias, seminarios, lanzamientos de producto, ferias de negocios, culturales, sociales, artísticos, fiestas especiales, eventos deportivos, entregas de premios, graduaciones y quince años.<strong>¿Cuáles son las características más importantes de las instalaciones?</strong>
							Contamos con Jardines, Carpas, Pista de baile, Estacionamiento, Acceso discapacitados</p>
									</div>
								</div>
							</div>
							<div className="row sp30">
								<div className="col-lg-6 col-md-6 m-b30">
									<div className="about-thumb">
										<img src={require('./../../images/about/pic5.jpg')} alt="" />
									</div>
								</div>
								<div className="col-lg-6 col-md-6 m-b30">
									<div className="about-thumb">
										<img src={require('./../../images/about/pic6.jpg')} alt="" /> 
									</div>
								</div>
							</div>
						</div>
					</div>
					
					
					<div className="section-full content-inner bg-line-top bg-line-bottom" style={{backgroundImage: "url(" + img4 + " )"}}>
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<div className="section-head text-center text-white">
										<h3 className="text-white">Somos profesionales en nuestras habilidades</h3>
										<p>Mas de 200+ clientes confiaron en nosotros</p>
									</div>
								</div>
							</div>
							<div className="row max-w900 m-auto">
								<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
									<div className="counter-style-1 text-white text-center">
										<div className="counter-num">
											<span className="counter"><CountUp end={5} /></span>
											<small>+</small>
										</div>
										<span className="counter-text">Años de experiencia</span>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
									<div className="counter-style-1 text-white text-center">
										<div className="counter-num">
											<span className="counter"><CountUp end={80} /></span>
										</div>
										<span className="counter-text">Eventos Realizados</span>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
									<div className="counter-style-1 text-white text-center">
										<div className="counter-num">
											<span className="counter"><CountUp end={3} /></span>
											<small>k</small>
										</div>
										<span className="counter-text">Clientes satisfechos</span>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
									<div className="counter-style-1 text-white text-center">
										<div className="counter-num">
											<span className="counter"><CountUp end={15} /></span>
											
										</div>
										<span className="counter-text">Productos</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					
					
					
					<div className="section-full content-inner-1 bg-white"  style={{backgroundImage:"url(" + img2 + ")" }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<div className="section-head text-center">
										<h3>Personal de trabajo</h3>
										<p>Somos un equipo de --------------</p>
									</div>
								</div>
							</div>
							<div className="row">
								{teamInfo.map((item,index) =>(
								
								<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
									<div className="dlab-team1" key={index}>
										<div className="thumb" >
											<img src={item.image} alt="" />
											<ul className="social-link">
												<li><Link to = {''}><i className="fa fa-facebook"></i></Link></li>
												<li><Link to = {''}><i className="fa fa-twitter"></i></Link></li>
											</ul>
										</div>
										<div className="team-info text-center">
											<h4 className="name">{item.name}</h4>
											<p className="position">{item.post}</p>
										</div>
									</div>
								</div>
								))}
								
							</div>
						</div>
							
						<div className="p-tb50">
							<div className="container">	
								<div class="row">
									<div class="col-lg-12">
										<div class="section-head text-center">
											<h3>Servicios y Oficios</h3>
											<p>Algunos de nuestros trabajos </p>
										</div>
									</div>
								</div>
							</div>
							<OurPartners />
						</div>
					</div>
					
				</div>
				
			</div>	
			
			<Footer />
			</>
		)
	}
}

export default About;