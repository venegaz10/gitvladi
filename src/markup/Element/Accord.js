import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Accordion } from 'react-bootstrap';

class Accord extends Component{
	render(){		
		return(
			<div className="dlab-accordion faq-style1">
				<Accordion defaultActiveKey="0">		
					<Accordion.Toggle className="panel" as={'div'}  eventKey="0">
						<div className="acod-head">
							<h6 className="acod-title"> 
								<Link to = {''} data-toggle="collapse" data-target="#collapse1" aria-expanded="true"> 
								<i className="fa fa-cart-plus"></i> Lugares Donde Atendemos </Link> 
							</h6>
						</div>
						<Accordion.Collapse eventKey="0">
							<div id="collapse1" className="acod-body collapse show" data-parent="#accordion001">
								<div className="acod-content">
									<img src={require('./../../images/map.png')}  alt="" />
									<ul className="list-check mb-0 primary">
										<li><Link to = {''}>Puno (26)</Link></li>
										<li><Link to = {''}>Mercado Central (19)</Link></li>
										<li><Link to = {''}>Yanamayo (54)</Link></li>
										<li><Link to = {''}>Totorani (76)</Link></li>
										<li><Link to = {''}>Laykakota (61)</Link></li>
										<li><Link to = {''}>Huajsapata (46)</Link></li>
										<li><Link to = {''}>Urb. Villa del lago (17)</Link></li>
										<li><Link to = {''}>Segunda Etapa (92)</Link></li>
										<li><Link to = {''}>Salcedo (124)</Link></li>
										<li><Link to = {''}>Rinconada (23)</Link></li>
										<li><Link to = {''}>Chanu Chanu(41)</Link></li>
										<li><Link to = {''}>Manto (101)</Link></li>
									</ul>
								</div>
							</div>	
						</Accordion.Collapse>
					</Accordion.Toggle>	
					<Accordion.Toggle as={'div'} className="panel" eventKey="1">
						<div className="acod-head">
							<h6 className="acod-title"> 
								<Link to = {''} data-toggle="collapse" data-target="#collapse2" className="collapsed" aria-expanded="false">
								<i className="fa fa-address-book"></i> Acerca de Nuestro Servicio</Link> 
							</h6>
						</div>
					
						<Accordion.Collapse eventKey="1">
							<div id="collapse2" className="acod-body" data-parent="#accordion001">
								<div className="acod-content">
									<img src={require('./../../images/about/pic2.jpg')} className="alignleft radius-md" alt="" />
									<p>Restaurant Local y Eventos Manto™ en la ciudad de PUNO - Bienvenido y se parte de todos lo servicios que ofrecemos como: Bautizos, Cortes de Pelo, Cumpleaños, Fiesta de Payasos, Fiestas de Promocion, Fiesta de Quinceaños, Fiestas Patronales y mucho más. Este equipo se conforma de personas multidisciplinarias y que atienden y asesoran todo tipo de celebraciones, ellos estan gustosos de planificar cada detalle de tu evento.</p>
								</div>
							</div>
						</Accordion.Collapse>
					</Accordion.Toggle>	
					<Accordion.Toggle className="panel" as={'div'} eventKey="2">
						<div className="acod-head">
							<h6 className="acod-title"> 
								<Link to = {''} data-toggle="collapse" data-target="#collapse3" className="collapsed" aria-expanded="false">
								<i className="fa fa-cc-discover"></i> Sobre Los Precios Delivery</Link> 
							</h6>
						</div>
						<Accordion.Collapse eventKey="2">
							<div id="collapse2" className="acod-body" data-parent="#accordion001">
								<div className="acod-content">
									<p>Restaurant Local y Eventos Manto™ en la ciudad de PUNO - Bienvenido y se parte de todos lo servicios que ofrecemos como: Bautizos, Cortes de Pelo, Cumpleaños, Fiesta de Payasos, Fiestas de Promocion, Fiesta de Quinceaños, Fiestas Patronales y mucho más. Este equipo se conforma de personas multidisciplinarias y que atienden y asesoran todo tipo de celebraciones, ellos estan gustosos de planificar cada detalle de tu evento.</p>
									<p>Restaurant Local y Eventos Manto™ en la ciudad de PUNO - Bienvenido y se parte de todos lo servicios que ofrecemos como: Bautizos, Cortes de Pelo, Cumpleaños, Fiesta de Payasos, Fiestas de Promocion, Fiesta de Quinceaños, Fiestas Patronales y mucho más. Este equipo se conforma de personas multidisciplinarias y que atienden y asesoran todo tipo de celebraciones, ellos estan gustosos de planificar cada detalle de tu evento.</p>
								</div>
							</div>
						</Accordion.Collapse>
					</Accordion.Toggle>	
				</Accordion>
			</div>	
		)
	}

}

export default Accord;