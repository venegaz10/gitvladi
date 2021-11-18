import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
var img = require('./../../images/banner/bnr1.jpg');

class Blogsingle extends Component{
	render(){
		return(
			<>
			
			<Header  />
			
			<div className="page-content bg-white">
				
				<div className="dlab-bnr-inr overlay-black-middle bg-pt" style={{backgroundImage:"url(" + img + ")"}}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<h1 className="text-white">Blog Informacion Completa</h1>
							
							<div className="breadcrumb-row">
								<ul className="list-inline">
									<li><Link to={'./'}>Inicio</Link></li>
									<li>Blog Informacion Completa</li>
								</ul>
							</div>
							
						</div>
					</div>
				</div>
				
				<div className="section-full bg-white content-inner-2">
					<div className="container">
						
						<div className="blog-post blog-single sidebar">
							<div className="dlab-post-media dlab-img-effect zoom-slow radius-sm"> 
								<Link to={'/blog-single'}><img src={require('./../../images/blog/default/thum1.jpg')} alt="" /></Link> 
							</div>
							<div className="dlab-post-info">
								<div className="dlab-post-title">
									<h2 className="post-title">Restaurant Has The Answer</h2>
								</div>
								<div className="dlab-post-meta">
									<div className="post-author-thumb">
										<img src={require('./../../images/testimonials/pic1.jpg')} alt="" />
									</div>
									<ul>
										<li className="post-author"><Link>Administrador</Link> </li>
										<li className="post-date">10 Diciembre 2021</li>
									</ul>
								</div>
								<div className="dlab-post-text">
									<p>El evento se realizo en el LOCALMANTO jr. leoncio prado El evento se realizo en el LOCALMANTO jr. leoncio prado nro 2074 con fecha 20 de septiembre.El evento se realizo en el LOCALMANTO jr. leoncio prado nro 2074 con fecha 20 de septiembre.</p>
									<blockquote>El evento se realizo en el LOCALMANTO jr. leoncio prado nro 2074 con fecha 20 de septiembre.El evento se realizo en el LOCALMANTO jr. leoncio prado nro 2074 con fecha 20 de septiembre.El evento se realizo en el LOCALMANTO jr. leoncio prado nro 2074 con fecha 20 de septiembre.</blockquote>
									<p>El evento se realizo en el LOCALMANTO jr. leoncio prado nro 2074 con fecha 20 de septiembre. El evento se realizo en el LOCALMANTO jr. leoncio prado nro 2074 con fecha 20 de septiembre.El evento se realizo en el LOCALMANTO jr. leoncio prado nro 2074 con fecha 20 de septiembre.El evento se realizo en el LOCALMANTO jr. leoncio prado nro 2074 con fecha 20 de septiembre.El evento se realizo en el LOCALMANTO jr. leoncio prado nro 2074 con fecha 20 de septiembre.</p>
									<div className="wp-block-image alignleft">
										<img src={require("./../../images/about/pic2.jpg")} alt=""/>
									</div>
									<p>El evento se realizo en el LOCALMANTO jr. leoncio prado nro 2074 con fecha 20 de septiembre.El evento se realizo en el LOCALMANTO jr. leoncio prado nro 2074 con fecha 20 de septiembre.El evento se realizo en el LOCALMANTO jr. leoncio prado nro 2074 con fecha 20 de septiembre.El evento se realizo en el LOCALMANTO jr. leoncio prado nro 2074 con fecha 20 de septiembre.El evento se realizo en el LOCALMANTO jr. leoncio prado nro 2074 con fecha 20 de septiembre.El evento se realizo en el LOCALMANTO jr. leoncio prado nro 2074 con fecha 20 de septiembre.El evento se realizo en el LOCALMANTO jr. leoncio prado nro 2074 con fecha 20 de septiembre.El evento se realizo en el LOCALMANTO jr. leoncio prado nro 2074 con fecha 20 de septiembre.El evento se realizo en el LOCALMANTO jr. leoncio prado nro 2074 con fecha 20 de septiembre.El evento se realizo en el LOCALMANTO jr. leoncio prado nro 2074 con fecha 20 de septiembre.</p>
								</div>
								<div className="dlab-post-tags clear">
									<div className="post-tags"> 
										<Link to={''}>Child </Link> <Link to={''}>Eduction </Link> <Link to={''}>Money </Link> <Link to={''}>Resturent </Link> 
									</div>
								</div>
							</div>
						</div>
						<div className="clear" id="comment-list">
							<div className="comments-area" id="comments">
								<h2 className="comments-title">8 Commentarios</h2>
								<div className="clearfix">
									
									<ol className="comment-list">
										<li className="comment">
											<div className="comment-body">
												<div className="comment-author vcard"> 
													<img  className="avatar photo" src={require('./../../images/testimonials/pic1.jpg')} alt="" /> 
													<cite className="fn">Pascualillo</cite> <span className="says">Dijo:</span> 
													<div className="comment-meta"> <Link to={''}>Octubre 6, 2021 at 7:15 am</Link> </div>
												</div>
												<p>El evento se realizo en el LOCALMANTO jr. leoncio prado nro 2074 con fecha 20 de septiembre.El evento se realizo en el LOCALMANTO jr. leoncio prado nro 2074 con fecha 20 de septiembre. </p>
												<div className="reply"> <Link to={''} className="comment-reply-link">Responder</Link> </div>
											</div>
											<ol className="children">
												<li className="comment odd parent">
													<div className="comment-body">
														<div className="comment-author vcard"> 
															<img  className="avatar photo" src={require('./../../images/testimonials/pic2.jpg')} alt="" /> 
															<cite className="fn">Harry El Sucio</cite> <span className="says">Dijo:</span> 
															<div className="comment-meta"> <Link to={''}>October 6, 2015 at 7:15 am</Link> </div>
														</div>
														<p>El evento se realizo en el LOCALMANTO jr. leoncio prado nro 2074 con fecha 20 de septiembre.El evento se realizo en el LOCALMANTO jr. leoncio prado nro 2074 con fecha 20 de septiembre.El evento se realizo en el LOCALMANTO jr. leoncio prado nro 2074 con fecha 20 de septiembre.</p>
														<div className="reply"> <Link to={''} className="comment-reply-link">Responder</Link> </div>
													</div>
													
												</li>
											</ol>
											
										</li>
										<li className="comment">
											<div className="comment-body">
												<div className="comment-author vcard"> 
													<img  className="avatar photo" src={require('./../../images/testimonials/pic1.jpg')} alt="" /> 
													<cite className="fn">Pedro Aquino</cite> <span className="says">Dijo:</span> 
													<div className="comment-meta"> <Link to={''}>October 6, 2015 at 7:15 am</Link> </div>
												</div>
												<p>El evento se realizo en el LOCALMANTO jr. leoncio prado nro 2074 con fecha 20 de septiembre.El evento se realizo en el LOCALMANTO jr. leoncio prado nro 2074 con fecha 20 de septiembre.El evento se realizo en el LOCALMANTO jr. leoncio prado nro 2074 con fecha 20 de septiembre.El evento se realizo en el LOCALMANTO jr. leoncio prado nro 2074 con fecha 20 de septiembre.</p>
												<div className="reply"> <Link to={''} className="comment-reply-link">Responder</Link> </div>
											</div>
										</li>
									</ol>
									
									<div className="comment-respond" id="respond">
										<h4 className="comment-reply-title" id="reply-title">Envia Tu Comentario 
											<small><Link style={{display:"none"}} to={''} id="cancel-comment-reply-link" rel="nofollow">Cancelar Respuesta</Link> </small> 
										</h4>
										<p>Se requiere conectarse o iniciar sesion por facebook o goolge para comentar. *</p>
										<form className="comment-form" id="commentform" method="post" action="http://sedatelab.com/developer/donate/wp-comments-post.php">
											<p className="comment-form-comment">
												<label for="comment">Comentar</label>
												<textarea rows="8" placeholder="Comentar" id="comment"></textarea>
											</p>
											<p className="comment-form-author">
												<label for="author">Nombre completo <span className="required">*</span></label>
												<input type="text" value="" placeholder="Nombre" id="author" />
											</p>
											<p className="comment-form-email">
												<label for="email">Email <span className="required">*</span></label>
												<input type="text" value="" placeholder="Email" id="email" />
											</p>
											<p className="comment-form-url">
												<label for="url">Asunto</label>
												<input type="text"  value=""  placeholder="Asunto"  id="url" />
											</p>
											<p className="form-submit">
												<input type="submit" value="Publicar tu Comentario" className="btn btnhover" id="submit" />
											</p>
										</form>
									</div>
									
								</div>
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

export default Blogsingle;