import React,{Component} from 'react';

import { Link } from 'react-router-dom';


import Header from './../Layout/Header';
import Footer from './../Layout/Footer';


var img1 = require('./../../images/banner/bnr1.jpg');
var img2 = require('./../../images/background/bg5.jpg');
var img3 = require('./../../images/background/bg4.jpg');
var img4 = require('./../../images/background/bg1.jpg');


class Ourservices extends Component{
	render(){
		return(
			<>
			<Header /> 
			<div className="page-content bg-white">
				
				<div class="dlab-bnr-inr overlay-black-middle" style={{backgroundImage:"url(" + img1 + ")", backgroundSize:"cover"}}>
					<div class="container">
						<div class="dlab-bnr-inr-entry">
							<h1 class="text-white">Nuestro Servicios</h1>
							
							<div class="breadcrumb-row">
								<ul class="list-inline">
									<li><Link to={"./"}><i class="fa fa-home"></i></Link></li>
									<li>Nuestros Servicios</li>
								</ul>
							</div>
							
						</div>
					</div>
				</div>
				
				<div className="content-block">
					
					<div className="section-full bg-white content-inner" style={{backgroundImage:"url(" + img2 + ")", backgroundSize:"100%"}}>
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<div className="section-head text-center">
										<div className="icon-bx icon-bx-xl">
											<img src={require('./../../images/cake1.jpg')} alt="" />
										</div>
										<h3>Servicios</h3>
										<p>Alquiler Local de Eventos - Restaurant</p>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
									<div className="icon-bx-wraper bx-style-1 bg-blue p-a30 center fly-box-ho">
										<div className="icon-bx-md bg-primary radius m-b20">
											<span className="icon-cell"><img src={require('./../../images/icons/icon4.png')} alt="" /></span>
										</div>
										<div className="icon-content">
											<h4 className="dlab-tilte m-b5">Delivery</h4>
											<p>Servicio Delivery en toda la ciudad de Puno.</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
									<div className="icon-bx-wraper bx-style-1 bg-blue p-a30 center fly-box-ho">
										<div className="icon-bx-md bg-primary radius m-b20">
											<span className="icon-cell"><img src={require('./../../images/icons/icon5.png')} alt="" /></span>
										</div>
										<div className="icon-content">
											<h4 className="dlab-tilte m-b5">Bautizos</h4>
											<p>Ceremonias de bautizos, primera comunion etc.</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
									<div className="icon-bx-wraper bx-style-1 bg-blue p-a30 center fly-box-ho">
										<div className="icon-bx-md bg-primary radius m-b20">
											<span className="icon-cell"><img src={require('./../../images/icons/icon6.png')} alt="" /></span>
										</div>
										<div className="icon-content">
											<h4 className="dlab-tilte m-b5">Cumpleaños </h4>
											<p>Todo tipo de Cumpleaños desde 1 año hasta 200 años.</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
									<div className="icon-bx-wraper bx-style-1 bg-blue p-a30 center fly-box-ho">
										<div className="icon-bx-md bg-primary radius m-b20">
											<span className="icon-cell"><img src={require('./../../images/icons/icon7.png')} alt="" /></span>
										</div>
										<div className="icon-content">
											<h4 className="dlab-tilte m-b5">Bodas</h4>
											<p>Recepcion de bodas capacidad maxima 120 personas</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
									<div className="icon-bx-wraper bx-style-1 bg-blue p-a30 center fly-box-ho">
										<div className="icon-bx-md bg-primary radius m-b20">
											<span className="icon-cell"><img src={require('./../../images/icons/icon4.png')} alt="" /></span>
										</div>
										<div className="icon-content">
											<h4 className="dlab-tilte m-b5">Recepcion de Conjuntos</h4>
											<p>Recepcion de conjuntos capacidad maxima 120 personas - 200 segundo piso</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
									<div className="icon-bx-wraper bx-style-1 bg-blue p-a30 center fly-box-ho">
										<div className="icon-bx-md bg-primary radius m-b20">
											<span className="icon-cell"><img src={require('./../../images/icons/icon5.png')} alt="" /></span>
										</div>
										<div className="icon-content">
											<h4 className="dlab-tilte m-b5">Baby Shawers</h4>
											<p>Recepcion maxima de personas 120 - Total 200 Segunda Planta</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
									<div className="icon-bx-wraper bx-style-1 bg-blue p-a30 center fly-box-ho">
										<div className="icon-bx-md bg-primary radius m-b20">
											<span className="icon-cell"><img src={require('./../../images/icons/icon6.png')} alt="" /></span>
										</div>
										<div className="icon-content">
											<h4 className="dlab-tilte m-b5">Ceremonias de Graduacion</h4>
											<p>Recepcion maxima de personas 120 - Total 200 Segunda Planta</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
									<div className="icon-bx-wraper bx-style-1 bg-blue p-a30 center fly-box-ho">
										<div className="icon-bx-md bg-primary radius m-b20">
											<span className="icon-cell"><img src={require('./../../images/icons/icon7.png')} alt="" /></span>
										</div>
										<div className="icon-content">
											<h4 className="dlab-tilte m-b5">Fiestas de Promocion</h4>
											<p>Recepcion maxima de personas 120 - Total 200 Segunda Planta</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div className="section-full content-inner service-area2 bg-img-fix bg-line-top bg-line-bottom" style={{backgroundImage: "url(" + img3 + ")", backgroundSize:'cover' }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<div className="section-head text-center">
										<h2 className="text-white">Ubicacion</h2>
										<p className="text-bold">Mirador Manto Puno</p>
										<div className="dlab-separator style1 bg-primary"></div>
									</div>
								</div>
							</div>
							
						</div>
					</div>
					
					<div className="section-full content-inner-1 bg-white"  style={{backgroundImage:"url(" + img4 + ")"}}>
						
						
					
						
						
					</div>
					
				</div>
				<Footer />
			</div>
			
		</>
		)
	}
	
}
export default Ourservices;