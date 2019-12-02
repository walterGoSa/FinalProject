import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import './Home.css';
import { Divider, Grid,Button,Segment,Image, Card,Icon,Header,List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import imgHome from '../../assets/splash.jpg';
import NavBar from '../../component/navBar/navBar';
import Footer from '../../component/footer/footer';

class Home extends Component {
	render() {
  
	  return (
		<div>
		  	<NavBar></NavBar>
			<div className="splash-content">
				<Image src={imgHome} className='img-home-page' alt='' />
				<div className="desc-float">
					<h1>TimeLuck CRM</h1>
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, non corrupti facere nihil deserunt aliquid necessitatibus assumenda voluptate voluptatem officiis at dolores impedit mollitia sapiente in excepturi consequatur? Aliquid, quis.</p>
					<div class="ui buttons">
						<button class="ui button">Registrar</button>
						<div class="or"></div>
						<button class="ui positive button">Iniciar sesión</button>
					</div>
				</div>
			</div>
			<div className="service-content">
				<h2>BIENVENIDO AL INICIO DE NEGOCIOS</h2>
				<br/>
				<Grid stackable columns={3}>
					<Grid.Column>
						<Segment.Group>
							<Segment><Image className="seg-img" src="https://www.crecenegocios.com/wp-content/uploads/2011/05/la-venta-personal.jpg"></Image></Segment>
							<Segment secondary>
								<p><b>Flujo de ventas</b></p>
								<p>Nos Facilita mantener anuestro equipo de ventas encaminado, aprovenchando cada oportunidad.</p>
							</Segment>
						</Segment.Group>
					</Grid.Column>
					<Grid.Column>
						<Segment.Group>
							<Segment><Image className="seg-img" src="https://www.importancia.org/wp-content/uploads/humanidad-del/Trabajo-en-Equipo-desiciones-empresa.jpg"></Image></Segment>
							<Segment secondary>
								<p><b>Tareas de quipo</b></p>
								<p>Todo está en un sólo lugar. A mi equipo le encanta porque les da independencia.</p>
							</Segment>
						</Segment.Group>
					</Grid.Column>
					<Grid.Column>
						<Segment.Group>
							<Segment><Image className="seg-img" src="https://www.avanzaproyectos.com/wp-content/uploads/2015/02/certificacion-pmi-acp-agile.jpg"></Image></Segment>
							<Segment secondary>
								<p><b>Proyecto Ágil</b></p>
								<p>Nos provee una visión general y especifica de cada proyecto. Permite que todos asuman responsabilidad desus tareas.</p>
							</Segment>
						</Segment.Group>
					</Grid.Column>
					<Grid.Column>
						<Segment.Group>
							<Segment><Image className="seg-img" src="https://www.workshopr2.com/wp-content/uploads/2019/06/proceso-creativo-4-min.jpg"></Image></Segment>
							<Segment secondary>
								<p><b>Proceso Creativo</b></p>
								<p>Mantiene a tu equipo en UN SÓLO LUGAR</p>
							</Segment>
						</Segment.Group>
					</Grid.Column>
					<Grid.Column>
						<Segment.Group>
							<Segment><Image className="seg-img" src="https://www.westchesterhispano.net/wp-content/uploads/2018/08/como-iniciar-tu-propio-negocio.jpg"></Image></Segment>
							<Segment secondary>
								<p><b>Planificación de Objetivos</b></p>
								<p>En tan sólo un minuto podemos entender cúal es el estado de nuestro trabajo. Reduce nuestra cantidad de reuniones semanales, y aumenta nuestra velicidad de programación.</p>
							</Segment>
						</Segment.Group>
					</Grid.Column>
					<Grid.Column>
						<Segment.Group>
							<Segment><Image className="seg-img" src="https://www.wrike.com/blog/content/uploads/2018/01/img-blog-906x518.jpg"></Image></Segment>
							<Segment secondary>
								<p><b>Calendario de Contenidos</b></p>
								<p>Es simple. En un vistazo, puedo ver la totalidad del plan, su progreso y todos los detalles.</p>
							</Segment>
						</Segment.Group>
					</Grid.Column>
				</Grid>
			</div>
			<div className="content-function">
				<Grid>
					<Grid.Row>
						<Grid.Column width={9}>
							<p>Simple y intuitivo</p>
							<h2>Fácil de usar, rápido de adoptar</h2>
							<p>Traer a tu equipo a bordo es tan simple como enviarles una invitación. Su facilidad de uso permitirá que se incorporen de inmediato.</p>
						</Grid.Column>
						<Grid.Column width={7}>
							<Image src='https://www.wrike.com/blog/content/uploads/2018/01/img-blog-906x518.jpg' />
						</Grid.Column>
					</Grid.Row>
					<br/>
					<Grid.Row>
						<Grid.Column width={7}>
							<Image src='https://www.wrike.com/blog/content/uploads/2018/01/img-blog-906x518.jpg' />
						</Grid.Column>
						<Grid.Column width={9}>
							<p>Flexible y versátil</p>
							<h2>Personaliza tu proceso de trabajo</h2>
							<p>Cada equipo es distinto, por lo que la flexibilidad es clave. Maneja tus procesos de trabajo y mantente listo para afrontar cualquier reto con facilidad.</p>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
			<div>
				<Footer></Footer>
			</div>
		</div>
	  )
	}
}
export default Home;