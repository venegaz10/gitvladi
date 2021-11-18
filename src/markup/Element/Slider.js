import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Carousel} from 'react-bootstrap';
import slider1 from './../../images/main-slider/slide1.jpg';
import slider2 from './../../images/main-slider/slide2.jpg';
import slider3 from './../../images/main-slider/localmanto3.jpg';
import slider4 from './../../images/main-slider/localmanto4.jpg';


class Slider extends Component{
	render(){
		return(
			<div className="main-slider">
				<Carousel indicators={false}>
					<Carousel.Item>
						<div className="slide" style={{ backgroundImage: "url("+ slider1 +")"}} >
							{/* <img className="d-block w-100 slider" src={require('./../../images/main-slider/slide1.jpg')}	alt="Second slide"	/> */}
							<div className="content">
								<span>Restaurant Local & Eventos</span>
								<h2 className="title">Manto</h2>
								<h4 className="sub-title">Atencion y Prioridad en Nuestro Servicio</h4>
								<Link to={"/about-1"} className="btn btnhover">Sobre Nosotros</Link>
								<Link to={''} className="btn white" data-toggle="modal" data-target="#exampleModal">Suscribete Ahora</Link>
							</div>	
						</div>	
					</Carousel.Item>
					<Carousel.Item>
						<div className="slide" style={{ backgroundImage: "url("+ slider2 +")"}} >
							{/* <img className="d-block w-100 slider"	src={require('./../../images/main-slider/slide2.jpg')}	alt="Second slide"	/> */}
							<div className="content">
								<span>Restaurante & Local</span>
								<h2 className="title">Eventos Manto</h2>
								<h4 className="sub-title">En la ciudad de Puno</h4>
								<Link to={"/about-1"} className="btn btnhover">Nosotros</Link>
								<Link to={''} className="btn white" data-toggle="modal" data-target="#exampleModal">Suscribete Ahora</Link>
							</div>	
						</div>	
					</Carousel.Item>
					<Carousel.Item>
						<div className="slide" style={{ backgroundImage: "url("+ slider3 +")"}} >
							{/* <img className="d-block w-100 slider"	src={require('./../../images/main-slider/slide2.jpg')}	alt="Second slide"	/> */}
							<div className="content">
								<span>Restaurante & Local</span>
								<h2 className="title">Eventos Manto</h2>
								<h4 className="sub-title">En la ciudad de Puno</h4>
								<Link to={"/about-1"} className="btn btnhover">Nosotros</Link>
								<Link to={''} className="btn white" data-toggle="modal" data-target="#exampleModal">Suscribete Ahora</Link>
							</div>	
						</div>	
					</Carousel.Item>
					<Carousel.Item>
						<div className="slide" style={{ backgroundImage: "url("+ slider4 +")"}} >
							{/* <img className="d-block w-100 slider"	src={require('./../../images/main-slider/slide2.jpg')}	alt="Second slide"	/> */}
							<div className="content">
								<span>Restaurante & Local</span>
								<h2 className="title">Eventos Manto</h2>
								<h4 className="sub-title">En la ciudad de Puno</h4>
								<Link to={"/about-1"} className="btn btnhover">Nosotros</Link>
								<Link to={''} className="btn white" data-toggle="modal" data-target="#exampleModal">Suscribete Ahora</Link>
							</div>	
						</div>	
					</Carousel.Item>
				</Carousel>
			</div>
		)
	}	
}

export default Slider;